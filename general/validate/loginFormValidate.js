import {
    requireField, 
    requireEmail, 
    requirePassword,
} from './commonValiate'

const loginFormValidate = values => {
    let errors = {}
    const {email, password} = values

    // Kiem tra email
    const emailRequire = requireField('email', email)
    if(emailRequire){
        errors.email = emailRequire
        return errors
    }
    const isEmail = requireEmail('email', email)
    if(isEmail){
        errors.email = isEmail
        return errors
    }

    // Kiem tra mat khau
    const passwordRequire = requireField('password', password)
    if(passwordRequire){
        errors.password = passwordRequire
        return errors
    }
    
    return errors
}

export default loginFormValidate