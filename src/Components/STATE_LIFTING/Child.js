import React from 'react'

export default function Child(props) {

    const tData = `I am from child data`

    props.onCarry(tData)
  return (
    <div>
        I am child component Hasib
        <p>{props.data}</p>
        <p>
            {props.hasi}
        </p>
    </div>
  )
}
