import {requireField, isCodeReset, requirePassword} from './commonValiate'

const resetPasswordFormValidate = values => {
    let errors = {}
    const {password, repassword, codeReset} = values

    // Kiem tra mat khau
    const passwordRequire = requireField('password', password)
    if(passwordRequire){
        errors.password = passwordRequire
        return errors
    }

    const isPassword = requirePassword('password', password)
    if(isPassword){
        errors.password = isPassword
        return errors
    }

    // Kiem tra nhap lai password co khop khong
    if(password !== repassword){
        errors.repassword = "Nhập lại mật khẩu không khớp!"
        return errors
    }

    // Kiem tra ma xac minh
    const requireVerify = requireField('codeReset', codeReset)
    if(requireVerify){
        errors.codeReset = requireVerify
        return errors
    }

    const isVerify = isCodeReset('codeReset', codeReset)
    if(isVerify){
        errors.codeReset = isVerify
        return errors
    }

    return errors
}

export default resetPasswordFormValidate