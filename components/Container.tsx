import React from 'react'

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const Container = (props: ContainerProps) => {
  const { children } = props
  return <div className="container mx-auto px-10">{children}</div>
}

export default Container
