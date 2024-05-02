import React from 'react'

export default function Input({id,title,value,type,name,ChangeData,errors}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input value={value} type={type} name={name} className="form-control" id={id} onChange={ChangeData}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
  </div>

  )
}
