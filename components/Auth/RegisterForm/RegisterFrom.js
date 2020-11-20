/** @format */

import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {registerApi} from '../../../api/user'
import {toast} from 'react-toastify'

export default function RegisterFrom(props) {
    const {showLoginForm} = props;
    const [loading, setLoading] = useState(false)
    const formik = useFormik({ 
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) =>{

            setLoading(true)
            const response = await registerApi(formData)
            console.log(response)
            if (response?.jwt) {
                toast.success('Se a registrado correctamente')
                showLoginForm();
            } else {
                toast.error("Error al registrar el usuario")
            }
            setLoading(false)
        }
    })

    return (
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
            name="name" 
            type="text" 
            placeholder="Nombres" 
            onChange={formik.handleChange} 
            error={formik.errors.name} 
        />
        <Form.Input 
            name='lastname' 
            type='text' 
            placeholder='Apellidos' 
            onChange={formik.handleChange}
            error={formik.errors.lastname}
        />
        <Form.Input 
            name='username' 
            type='text' 
            placeholder='Nombre de Usuario' 
            onChange={formik.handleChange}
            error={formik.errors.username}
        />
        <Form.Input 
            name='email' 
            type='text' 
            placeholder='Correo' 
            onChange={formik.handleChange}
            error={formik.errors.email}
        />
        <Form.Input 
            name='password' 
            type='password' 
            placeholder='Contraseña' 
            onChange={formik.handleChange}
            error={formik.errors.password}
        />
        <div>
            <Button tupe='button' basic onClick={showLoginForm}>
                Iniciar Sesion
            </Button>
            <Button className='submit' className='submit' loading={loading}>
                Registrar
            </Button>
        </div>
      </Form>
    );
}

function initialValues(){
    return{
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    }
}

function validationSchema() {
    return{
        name: Yup.string().required(true),
        // lastname: Yup.string().required("el Apellido es Obligatorio") para que muestre mensaje
        lastname: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string(true)
    }
}