import Image from "next/image";

export function Header() {
  return (
    <header className="pt-10 pb-8 max-w-[1180px] mx-auto sticky">
      <Image src={'/logo.svg'} width={129} height={52} alt="" />
    </header>
  )
}