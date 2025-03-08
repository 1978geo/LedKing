'use client'

import type React from 'react'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { CloudUpload, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePickerProps {
  onChange?: (file: File | null) => void
  value?: File | null
  className?: string
  placeholder?: string
}

export default function ImagePicker({
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  value,
  className = '',
  placeholder = 'Click to upload an image',
}: ImagePickerProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onChange?.(file)

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setPreview(null)
    onChange?.(null)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      role='button'
      className={cn(
        'relative border rounded-md cursor-pointer hover:bg-muted/50 transition-colors',
        className,
      )}
      onClick={handleClick}
    >
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='image/*'
        className='sr-only'
        aria-label='Upload image'
      />

      <div className='flex items-center min-h-[2.5rem] h-full px-3 py-2'>
        {preview ? (
          <div className='flex items-center justify-between w-full'>
            <span className='text-sm truncate flex-1'>
              {fileInputRef.current?.files?.[0]?.name ?? 'Image uploaded'}
            </span>
            <Button
              type='button'
              variant='ghost'
              size='sm'
              className='h-8 w-8 p-0'
              onClick={handleRemove}
            >
              <Trash2 className='h-4 w-4 text-destructive' />
              <span className='sr-only'>Remove image</span>
            </Button>
          </div>
        ) : (
          <div className='flex items-center justify-between text-muted-foreground w-full'>
            <span className='text-sm'>{placeholder}</span>
            <CloudUpload className='h-5 w-5 shrink-0' />
          </div>
        )}
      </div>
    </div>
  )
}
