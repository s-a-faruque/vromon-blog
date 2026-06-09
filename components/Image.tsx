import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => {
  const resolvedSrc =
    typeof src === 'string' && /^https?:\/\//.test(src) ? src : `${basePath || ''}${src}`
  return <NextImage src={resolvedSrc} {...rest} />
}

export default Image
