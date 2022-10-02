import React from 'react'

interface ActionHeaderProps {
  children: string
}

const ActionHeader = (props: ActionHeaderProps) => {
  const { children } = props
  return (
    <h1 className="text-4xl text-white text-center py-10 capitalize">
      {children}
    </h1>
  )
}

export default ActionHeader
