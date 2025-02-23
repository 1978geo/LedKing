'use server'

import { promises as fs } from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const dbPath = path.join(process.cwd(), 'data', 'ledking.db.json')

interface Data {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any // Collections inside the database
}

interface Identifiable {
  id: string
}

const readDatabase = async (): Promise<Data> => {
  try {
    const data = await fs.readFile(dbPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading database:', error)
    return {} // Return empty object if file is missing or corrupt
  }
}

const writeDatabase = async (data: Data): Promise<void> => {
  try {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error writing to database:', error)
  }
}

export const find = async <T extends Identifiable>(
  collection: string,
  query: Partial<T> = {},
): Promise<T[]> => {
  const db = await readDatabase()
  return (db[collection] || []).filter((item: T) =>
    Object.keys(query).every(
      key => item[key as keyof T] === query[key as keyof T],
    ),
  )
}

export const findOne = async <T extends Identifiable>(
  collection: string,
  query: Partial<T> = {},
): Promise<T | null> => {
  const db = await readDatabase()
  return (
    (db[collection] || []).find((item: T) =>
      Object.keys(query).every(
        key => item[key as keyof T] === query[key as keyof T],
      ),
    ) || null
  )
}

export const findById = async <T extends Identifiable>(
  collection: string,
  id: string,
): Promise<T | null> => {
  const db = await readDatabase()
  return (db[collection] || []).find((item: T) => item.id === id) || null
}

export const findAllByIds = async <T extends Identifiable>(
  collection: string,
  ids: string[],
): Promise<T[]> => {
  const db = await readDatabase()
  return (db[collection] || []).filter((item: T) => ids.includes(item.id))
}

export const create = async <T extends Omit<Identifiable, 'id'>>(
  collection: string,
  document: T,
): Promise<T & Identifiable> => {
  const db = await readDatabase()
  if (!db[collection]) db[collection] = []

  const newDocument = { ...document, id: uuidv4() }
  db[collection].push(newDocument)

  await writeDatabase(db)
  return newDocument
}

export const update = async <T extends Identifiable>(
  collection: string,
  query: Partial<T>,
  update: Partial<T>,
): Promise<boolean> => {
  const db = await readDatabase()
  if (!db[collection]) return false

  let updated = false
  db[collection] = db[collection].map((item: T) => {
    if (
      Object.keys(query).every(
        key => item[key as keyof T] === query[key as keyof T],
      )
    ) {
      updated = true
      return { ...item, ...update }
    }
    return item
  })

  if (updated) {
    await writeDatabase(db)
  }

  return updated
}

export const remove = async <T extends Identifiable>(
  collection: string,
  query: Partial<T>,
): Promise<boolean> => {
  const db = await readDatabase()
  if (!db[collection]) return false

  const initialLength = db[collection].length
  db[collection] = db[collection].filter(
    (item: T) =>
      !Object.keys(query).every(
        key => item[key as keyof T] === query[key as keyof T],
      ),
  )

  if (db[collection].length < initialLength) {
    await writeDatabase(db)
    return true
  }

  return false
}
