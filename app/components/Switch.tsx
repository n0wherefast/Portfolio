import React from 'react'
import Switch from 'react-switch'

export default function Switches({checked , handle}:any) {
  return (
    <Switch
    height={18}
    width={46}
    className="react-switch"
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}            
    onChange={handle} checked={checked}/>
  )
}
