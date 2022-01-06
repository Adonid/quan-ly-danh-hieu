const COOKIE_EXPRIES = process.env.NEXT_PUBLIC_COOKIE_EXPRIES

export function setCookie(name, value) {
    const d = new Date()
    d.setTime(d.getTime() + (COOKIE_EXPRIES * 24 * 60 * 60 * 1000))
    const expires = "expires=" + d.toUTCString()
    window.document.cookie = name + "=" + value + ";" + expires + ";path=/;secure"
}

export function getCookie(cname) {
    const name = cname + "="
    const decodedCookie = decodeURIComponent(window.document.cookie)
    const ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

export function getTokenInString(cname, cookies) {
    const name = cname + "="
    const ca = cookies.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

export function removeCookie(name) {
    const d = new Date()
    d.setTime(d.getTime() - (COOKIE_EXPRIES * 24 * 60 * 60 * 1000))
    const expires = "expires=" + d.toUTCString()
    window.document.cookie = name + "=;" + expires + ";path=/;secure"
}

export const setTokenInCookie = token => setCookie("secure", token)
export const removeTokenInCookie = () => removeCookie("secure")
export const checkTokenInCookie = () => getCookie("secure")
export const getToken = cookies => getTokenInString("secure", cookies)