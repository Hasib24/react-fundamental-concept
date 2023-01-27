import React from 'react'
import './FunCompo.css'

export default function FunCompo(props) {
    const {title, des} = props

  return (
    <div className='funCompo'>From Functional Component <br />
        {title} <br/>
        {des} <br/>
    </div>
  )
}
