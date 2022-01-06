// config
import config from "config/config.json"

export function toImageUrl(uri){
    return config.host + uri
}
export const defaultAvatarThub = config.host + "public/images/users/avatars/thumbnail/icon-user-default.png"

export const defaultAvatarOrg = config.host + "public/images/users/avatars/original/icon-user-default.png"

export const defaultBackground = config.host + "public/images/users/backgrounds/background-pictures.jpg"
