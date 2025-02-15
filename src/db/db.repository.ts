import { promises as fs } from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const dbPath = path.resolve(__dirname, 'db', 'ledking.db.json')

interface Data {
  [key: string]: any
}

interface Identifiable {
  id: string
}

const readDatabase = async (): Promise<Data> => {
  const data = await fs.readFile(dbPath, 'utf-8')
  return JSON.parse(data)
}

const writeDatabase = (data: Data): Promise<void> => {
  return fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf-8')
}

export const find = async <T extends Identifiable>(
  collection: string,
  query: Partial<T> = {},
): Promise<T[]> => {
  const db = await readDatabase()
  return db[collection].filter((item: T) => {
    return Object.keys(query).every(
      key => item[key as keyof T] === query[key as keyof T],
    )
  })
}

export const findOne = async <T extends Identifiable>(
  collection: string,
  query: Partial<T> = {},
): Promise<T> => {
  const db = await readDatabase()
  return db[collection].find((item: T) => {
    return Object.keys(query).every(
      key => item[key as keyof T] === query[key as keyof T],
    )
  })
}

export const findById = async <T extends Identifiable>(
  collection: string,
  id: string,
): Promise<T> => {
  const db = await readDatabase()
  return db[collection].find((item: T) => item.id === id)
}

export const create = async <T extends Identifiable>(
  collection: string,
  document: T,
): Promise<void> => {
  const db = await readDatabase()
  document.id = uuidv4()
  db[collection].push(document)
  writeDatabase(db)
}

export const update = async <T extends Identifiable>(
  collection: string,
  query: Partial<T>,
  update: Partial<T>,
): Promise<void> => {
  const db = await readDatabase()
  db[collection] = db[collection].map((item: T) => {
    if (
      Object.keys(query).every(
        key => item[key as keyof T] === query[key as keyof T],
      )
    ) {
      return { ...item, ...update }
    }
    return item
  })
  writeDatabase(db)
}

export const remove = async <T extends Identifiable>(
  collection: string,
  query: Partial<T>,
): Promise<void> => {
  const db = await readDatabase()
  db[collection] = db[collection].filter((item: T) => {
    return !Object.keys(query).every(
      key => item[key as keyof T] === query[key as keyof T],
    )
  })
  writeDatabase(db)
}
