const baseUrl = "https://shorthaired-abundant-catfish.glitch.me"

export const getData = async (url) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'GET'
    })

    const data = await res.json()
    return data
}