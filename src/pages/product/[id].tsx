import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  
  console.log(query)

  return (
    <div>
      <div>
        <Image src="/camiseta.png" width={520} height={520} alt="" />
      </div>
    </div>
  )
}