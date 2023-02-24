import React, { useState } from 'react'
import Card from '../card/Card';


const Form = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState({ firstName: "", lastName: "", email: "", tel: "" });
    // console.log(data);
    const change = (e) => {
        setValue((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const submit = (e) => {
        e.preventDefault();
        setData((p) => [...p, { ...value, id: Date.now() }]);
        setValue({ firstName: "", lastName: "", email: "", tel: "" })

        // console.log(data)
    }

    const deleteItem = (id) => {
        setData((p) => p.filter((item) => item.id != id))
    }

    const editItem = (obj) => {
        setData((p)=> p.map((el)=> el.id===obj.id ? obj : el) )
    }

    return (
        <div className="container my-5">
            <h1 className='text-dark'>TODO LIST</h1>
            <div className="App">
                <form onSubmit={submit} >
                    <div className="input-group w-75 my-1">
                        <span className="input-group-text ">First name</span>
                        <input required onChange={change} value={value.firstName} type="text" className="form-control" name="firstName" />
                    </div>
                    <div className="input-group w-75 my-1">
                        <span className="input-group-text ">Last name</span>
                        <input required onChange={change} value={value.lastName} type="text" className="form-control" name="lastName" />
                    </div>
                    <div className="input-group w-75 my-1">
                        <span className="input-group-text ">Email post </span>
                        <input required onChange={change} value={value.email} type="email" className="form-control" name="email" />
                    </div>
                    <div className="input-group w-75 my-1">
                        <span className="input-group-text ">TL number</span>
                        <input required onChange={change} value={value.tel} type="tel" className="form-control" name="tel" />
                    </div>

                    <button className="btn btn-outline-success  w-75 my-3" type='submit'>Submit</button>
                </form>
                <ul className='ul-list w-75 list-group list-unstyled'>
                    <li className={data.length ? "list-item-top1" : "d-none"}>
                        <p className='margin0'>Firstame</p>
                        <p className='margin0'>Lastname</p>
                        <p className='margin0'>E-mail</p>
                        <p className='margin0'>Phone Number</p>
                        <p className='margin0'>Edit / Delete</p>
                    </li>
                    {data.map((el) => !el.length ? <Card edit={editItem} del={deleteItem} key={el.id} {...el} /> : "Nimadir xato ketdi")}
                </ul>
            </div>
        </div>
    )
}

export default Form