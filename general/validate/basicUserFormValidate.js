import {
    requireUserName, 
    requireField, 
    isPhoneNumber,
    limitedName
} from './commonValiate'

const basicUserFormValidate = values => {
    let errors = {}
    const {fullName, name, phoneNumber} = values

    // Kiem tra fullName
    const fullNameNotEmpty = requireField('fullName', fullName)
    if(fullNameNotEmpty){
        errors.fullName = fullNameNotEmpty
        return errors
    }
    const limitFullName = limitedName('fullName', fullName)
    if(limitFullName){
        errors.name = limitFullName
        return errors
    }

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
        
    // Kiem tra SDT
    const phoneNumberRequire = isPhoneNumber('phoneNumber', phoneNumber)
    if(phoneNumberRequire){
        errors.phoneNumber = phoneNumberRequire
        return errors
    }    

    return errors
}

export default basicUserFormValidate