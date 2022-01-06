import {
    requireField, 
    isNumber,
    limitedAge,
    notSpecialCharChat,
    limitedDescription
} from './commonValiate'

const moreInfoUserFormValidate = values => {
    let errors = {}
    const {genre, age, work, skill, bio} = values

    // Kiem tra gioi tinh
    const isRequireGenre = requireField('genre', genre)
    if(isRequireGenre){
        errors.genre = isRequireGenre
        return errors
    }
    // Kiem tra do tuoi
    if(age){
        const formatAge = isNumber('age', age)
        if(formatAge){
            errors.age = formatAge
            return errors
        }
        const limitAge = limitedAge('age', age)
        if(limitAge){
            errors.age = limitAge
            return errors
        }
    }
    
    // Kiem tra nghe nghiep
    if(work){
        const formatWork = notSpecialCharChat('work', work)
        if(formatWork){
            errors.work = formatWork
            return errors
        }
    }

    // Kiem tra skill
    if(skill){
        const formatSkill = notSpecialCharChat('skill', skill)
        if(formatSkill){
            errors.skill = formatSkill
            return errors
        }
    }

    // Kiem tra BIO
    if(bio){
        const formatBio = notSpecialCharChat('bio', bio)
        if(formatBio){
            errors.bio = formatBio
            return errors
        }
        const limitBio = limitedDescription('bio', bio)
        if(limitBio){
            errors.bio = limitBio
            return errors
        }
    }

    return errors
}

export default moreInfoUserFormValidate