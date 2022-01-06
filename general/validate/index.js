import registerFormValidate from './registerFormValidate'
import forgetPasswordFormValidate from './forgetPasswordFormValidate'
import resetPasswordFormValidate from './resetPasswordFormValidate'
import loginFormValidate from './loginFormValidate'
import basicUserFormValidate from './basicUserFormValidate'
import moreInfoUserFormValidate from './moreInfoUserFormValidate'
import addressFormValidate from './addressFormValidate'
import linkSocialFormValidate from './linkSocialFormValidate'

module.exports = {
    registerValidate: registerFormValidate,
    forgetPasswordValidate: forgetPasswordFormValidate,
    resetPasswordValidate: resetPasswordFormValidate,
    loginValidate: loginFormValidate,
    basicUserValidate: basicUserFormValidate,
    moreInfoUserValidate: moreInfoUserFormValidate,
    addressValidate: addressFormValidate,
    linkSocialValidate: linkSocialFormValidate,
}