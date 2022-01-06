import {requireField, requireEmail} from './commonValiate'

const forgetPasswordFormValidate = values => {
    let errors = {}
    const {email} = values
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

    return errors
}

export default forgetPasswordFormValidate