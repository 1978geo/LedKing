'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react'
import { ConfirmModal } from './'

type ConfirmOptions = {
  title: string
  text: string
}

type ConfirmModalContextType = {
  confirm: (options: ConfirmOptions) => Promise<boolean>
}

const ConfirmModalContext = createContext<ConfirmModalContextType | undefined>(
  undefined,
)

export const ConfirmModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalOptions, setModalOptions] = useState<ConfirmOptions | null>(null)
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(
    null,
  )

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    setModalOptions(options)
    return new Promise(resolve => {
      setResolver(() => resolve)
    })
  }, [])

  const handleConfirm = () => {
    resolver?.(true)
    setModalOptions(null)
  }

  const handleCancel = () => {
    resolver?.(false)
    setModalOptions(null)
  }

  return (
    <ConfirmModalContext.Provider value={{ confirm }}>
      {children}
      <ConfirmModal
        title={modalOptions?.title ?? ''}
        text={modalOptions?.text ?? ''}
        open={!!modalOptions}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </ConfirmModalContext.Provider>
  )
}

export const useConfirmModal = (): ConfirmModalContextType => {
  const context = useContext(ConfirmModalContext)
  if (!context) {
    throw new Error(
      'useConfirmModal must be used within a ConfirmModalProvider',
    )
  }
  return context
}
