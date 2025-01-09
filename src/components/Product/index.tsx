import Image from "next/image";

export function Product() {
  return (
    <a className="bg-neutral-900 border border-neutral-800 rounded-lg cursor-pointer relative flex flex-col justify-center items-center overflow-hidden group">
      <div className="p-4">
        <Image src={'/camiseta.png'} width={520} height={480} alt="" objectFit="contain"/>
        <footer className="absolute bottom-1 left-1 right-1 p-4 rounded-lg flex items-center justify-between bg-neutral-800 translate-y-[110%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-base text-neutral-100">Camiseta name</strong>
          <span className="text-lg text-emerald-600 font-bold">R$ 79,90</span>
        </footer>
      </div>
    </a>
  )
}