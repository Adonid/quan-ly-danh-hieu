import {
    requireUserName, 
    requireField, 
    requireEmail, 
    requirePassword,
    isChecked
} from './commonValiate'

const registerFormValidate = values => {
    let errors = {}
    const {name, email, password, appro} = values

    // Kiem tra username
    const nameNotEmpty = requireField('name', name)
    if(nameNotEmpty){
        errors.name = nameNotEmpty
        return errors
    }
    const nameRequire = requireUserName('name', name)
    if(nameRequire){
        errors.name = nameRequire
        return errors
    }

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
    
    const isPassword = requirePassword('password', password)
    if(isPassword)
        errors.password = isPassword

    const isAppro = isChecked('appro', appro)
    if(isAppro)
        errors.appro = isAppro

    return errors
}

export default registerFormValidate