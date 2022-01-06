import {
    isUrl
} from './commonValiate'

const linkSocialFormValidate = values => {
    let errors = {}
    const { facebook, twitter, instagram} = values
    // Kiem tra link facebook
    if(facebook){
        const isFacebookLink = isUrl('url', facebook)
        if(isFacebookLink){
            errors.facebook = isFacebookLink
            return errors
        }
    }
    // Kiem tra link twitter
    if(twitter){
        const isTwitterLink = isUrl('url', twitter)
        if(isTwitterLink){
            errors.twitter = isTwitterLink
            return errors
        }
    }
    // Kiem tra link instagram
    if(instagram){
        const isInstagramLink = isUrl('url', instagram)
        if(isInstagramLink){
            errors.instagram = isInstagramLink
            return errors
        }
    }

    return errors
}

export default linkSocialFormValidate