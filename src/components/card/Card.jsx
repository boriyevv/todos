import React, { useState } from 'react'

const Card = ({ id, firstName, lastName, email, tel, del, edit  }) => {
  const [state, setState] = useState(true)
  const [value, setValue] = useState({ firstName, lastName, email, tel });


  const change = (e) => {
    setValue((p) => ({ ...p, [e.target.name]: e.target.value }))
  }


  const submit = (e) => {
    e.preventDefault();
    edit({...value, id}); 
    setState(true)
    // console.log(value)
  }

  return (
    <>
      {state ?

        <li className="list-item">
          <p className='my-auto  '>{firstName}</p>
          <p className='my-auto '>{lastName}</p>
          <p className='my-auto '>{email}</p>
          <p className='my-auto '>{tel}</p>
          <div className="btn-wrapper d-flex gap-3">
            <button onClick={() => setState(!state)} className="btn btn-outline-info "><i className="fa-regular fs-5 text-dark  fa-pen-to-square"></i></button>
            <button onClick={() => del(id)} className="btn btn-outline-danger "><i className="fa-solid fs-5  fa-trash-can"></i></button>
          </div>

        </li>

        :

        <form onSubmit={submit} >
          <div className="input-group  d-flex">
            <input required onChange={change} value={value.firstName} type="text" className="editinp form-control p-2 h-25 border-1" name="firstName" />

            <input required onChange={change} value={value.lastName} type="text" className="editinp form-control p-2 h-25 border-1" name="lastName" />


            <input required onChange={change} value={value.email} type="email" className="editinp form-control p-2 h-25 border-1" name="email" />


            <input required onChange={change} value={value.tel} type="tel" className="editinp form-control p-2 h-25 border-1" name="tel" />
          <button className="btn btn-outline-success" type='submit'>Save <i class="fa-solid fa-pen"></i></button>
          </div>

        </form>



      }

    </>


  )
}

export default Card