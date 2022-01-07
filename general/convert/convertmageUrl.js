// config
import config from "config/config.json"

export function toImageUrl(uri, avatar=true){
    if(avatar)
     return uri?(config.host + uri):(config.host + "public/images/users/avatars/original/icon-user-default.png")
    else
     return uri?(config.host + uri):(config.host + "public/images/users/backgrounds/background-pictures.jpg")
}