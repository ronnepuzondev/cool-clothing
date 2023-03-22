import { useState } from "react"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";

import './sign-up-form.styles.scss'

import Button from "../button/button.component";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //need to confirm that passwords match first
        if(password !== confirmPassword ) {
            alert("passwords do not match")
            return;
        }
        try {
            
            // make sure to call the method, pass it email value and password value which we destructed from form fields
            const { user } = await createAuthUserWithEmailAndPassword(email, password);



            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }

            console.log('user creation encounted an error', error)
        }



    }

    console.log(formFields)
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})

    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} action="">
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm