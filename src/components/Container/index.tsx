interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="h-screen flex flex-col justify-center items-start">
      { children }
    </div>
  )
}
