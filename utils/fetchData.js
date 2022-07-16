const baseUrl = "http://localhost:1234"

export const getData = async (url) => {
    const res = await fetch(`${baseUrl}/${url}`, {
        method: 'GET'
    })

    const data = await res.json()
    return data
}