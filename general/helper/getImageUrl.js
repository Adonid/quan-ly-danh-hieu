const END_POINT = process.env.NEXT_PUBLIC_END_POINT

export function toImageUrl(uri){
    return END_POINT+uri
}
export const defaultAvatarThub = END_POINT+"public/images/users/avatars/thumbnail/icon-user-default.png"

export const defaultAvatarOrg = END_POINT+"public/images/users/avatars/original/icon-user-default.png"
