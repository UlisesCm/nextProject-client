import React, {useState} from 'react'
import { Form, Button} from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {} from 'react-toastify'

export default function LoginForm(props) {
    const {showRegisterForm} =props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

    return (
        <Form className='login-form' onSubmit={formik.handleSubmit}>
            <Form.Input 
                name='identifier' 
                type='text' 
                placeholder='Correo Electronico'
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />
            <Form.Input 
                name='password' 
                type='password' 
                placeholder='Contraseña'
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <div className='actions'>
                <Button type='button' basic onClick={showRegisterForm}>
                    Registrate
                </Button>
                <div>
                    <Button className='submit' type='submit'>
                        Entrar
                    </Button>
                    <Button type='button'>
                        ¿has olvidado la contraseña?
                    </Button>
                </div>


            </div>
        </Form>
    )
}

function initialValues() {
    return{
        identifier:"",
        password:"",
    }
}

function validationSchema() {
    return{
        identifier: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    }
}