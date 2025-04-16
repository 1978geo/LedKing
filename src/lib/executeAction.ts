import { isRedirectError } from 'next/dist/client/components/redirect-error'

type Options<T> = {
  actionFn: () => Promise<T>
  successMessage?: string
}

const executeAction = async <T>({
  actionFn,
  successMessage = 'The actions was successful',
}: Options<T>): Promise<{ success: boolean; message: string }> => {
  try {
    await actionFn()

    return {
      success: true,
      message: successMessage,
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      }
    }

    return {
      success: false,
      message: 'An error occurred while executing the action',
    }
  }
}

export { executeAction }
export type { Options }
