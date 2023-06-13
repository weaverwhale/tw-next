import Image from "next/image"

export default function Pokemon(props: any) {
  const { pokemon, index, alt, image } = props

  console.log(image)

  return image && <Image key={index} src={image} alt={alt ?? pokemon.name} width="500" height="500" />
}
