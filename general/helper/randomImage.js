const backgrounds = [
    // NATURE
    {url: "https://unsplash.com/photos/hDzllryPB9g/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/UCDiLtfDRgU/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/lcBr9h8Dlvg/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/hqoCVZpqXQ0/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/XcKog6oW1FI/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/vTXgphTGPD0/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/KZF40BWTty8/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/wtpQ0GdQ6xo/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/CtZC56qUQdw/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/GNSRazeH00I/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/zBxjmfhjdaE/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/m5eI1DUq-vE/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/YNoU4cE5O_o/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/v0VBikgi-Ac/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/q-D_FFvnob8/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/eeCCNh4iQF0/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/sKm0RZjOgIE/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/Rb5rUmziX6w/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/Nnebe-Ws-_s/download?force=true&w=1920"},
    // WORK
    {url: "https://unsplash.com/photos/pVt9j3iWtPM/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/KieCLNzKoBo/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/LrxSl4ZxoRs/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/z3htkdHUh5w/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/1uWTR1fcnI0/download?force=true&w=1920"},
    // TRAVEL
    {url: "https://unsplash.com/photos/Nj30a18EwNw/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/sGblr5yVXiM/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/eeh1XiFAyVk/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/f4Ro2rdoAzE/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/ak-cBlzw6fA/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/pwMbtwA9LRc/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/ISqTudqZERQ/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/18TtaGJW6Q0/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/VbZxEBk4qy0/download?force=true&w=1920"},
    // ANIMAL
    {url: "https://unsplash.com/photos/Hw-4mwFVvXs/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/LI5mgXOPkQk/download?force=true&w=1920"},
    {url: "https://unsplash.com/photos/Hw-4mwFVvXs/download?force=true&w=1920"},
]

const avatars = [
    {url: "https://unsplash.com/photos/aDXV4GbqHcQ/download?force=true&w=640"},
    {url: "https://unsplash.com/photos/LTzU-4PhRIY/download?force=true&w=640"},
    {url: "https://unsplash.com/photos/KLSPw4TTXSY/download?force=true&w=640"},
    {url: "https://unsplash.com/photos/CJO9xWDVGXU/download?force=true&w=640"},
    {url: "https://unsplash.com/photos/ZOuIaocaNDA/download?force=true&w=640"},
    {url: "https://unsplash.com/photos/ef3A5EDR7Jk/download?force=true&w=640"},
]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

export const randomBackground = backgrounds[getRandomInt(backgrounds.length-1)].url
export const randomAvatar = avatars[getRandomInt(avatars.length-1)].url