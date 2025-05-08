import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Demo: FC<IProps> = (props) => {
  const { children, name, age, height = 185 } = props
  return (
    <div>
      {children}
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>height: {height}</p>
    </div>
  )
}
export default memo(Demo)
