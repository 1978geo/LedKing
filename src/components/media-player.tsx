'use client'

interface MediaPlayerProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  source: string
  className?: string
}

export function MediaPlayer({ source, className, ...props }: MediaPlayerProps) {
  return (
    <video
      className={className}
      {...props}
    >
      <source
        src={source}
        type='video/mp4'
      />
    </video>
  )
}
