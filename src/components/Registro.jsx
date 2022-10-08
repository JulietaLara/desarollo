import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UseForm } from "../hooks/useForm";
import { registerAuth, RegisterAuth } from "../store/slices/auth/Thunks"

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
       <p>¿Ya tiene cuenta ? ¿Qué hace acá? Inicie sesión</p>
    </div>
        </>
    )
}