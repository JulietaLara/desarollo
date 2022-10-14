import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseForm } from "../hooks/useForm";
import { registerAuth, RegisterAuth } from "../store/slices/auth/Thunks"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { async } from "@firebase/util";
import { UserAuth2 } from '../context/AuthContextC';

export const Registro = () => {
    // const dispatch = useDispatch()

    // const { email, password, onInputChange, formState } = UseForm({
    //     email: "julieta.lara@uao.edu.co",
    //     password: "pass"
    // })

    // const onSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(formState)
    //     dispatch( registerAuth( email, password ))
    // }

    // useEffect(() => {
    //     onAuthStateChanged( auth, async( user ) => {
    //         if ( !user ) return dispatch( logout() );

    //         dispatch( register( {email: user.email} ) ) 
    //     })
    // }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser} = UserAuth2();
    const navigate= useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password) 
            navigate('about')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    useEffect(() => {
        if(user != null) {
          navigate('/about')
        }
      },[user])

    return (
        <>
            {/* <h1>Registro</h1>
            <hr />
            <form onSubmit={(event) => onSubmit(event)}>
                <input name="email" type="email" onChange={ (event) => onInputChange(event)} value={email} />
                <input name="password" type="password" onChange={ (event) => onInputChange(event)} value={password} />

                <button type="submit"> Registro </button>
            </form> */}
            <div>
       <h1>Registrese terrícola</h1>
      
    </div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Correo electrónico:</label>
            <br />
            <input onChange={(e) => setEmail(e.target.value)} type="email"  />
        </div>
        <div>
            <label>Contraseña:</label>
            <br />
            <input  onChange={(e) => setPassword(e.target.value)} type="password"  />
        </div>
        <br />
        <button>Registrarse</button>
    </form>
    <p>¿Ya tiene cuenta? ¿Qué hace acá? <Link to='login'className="underline">Inicie sesión</Link></p>
        </>
    )
}