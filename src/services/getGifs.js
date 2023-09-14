const apiKey = 'lEyszaGpGKzZsCgIjBD8B5frhmGKhoNi'

export default function getGifs( {keyword = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20`
    return fetch(apiUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const { data = [] } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } =  images.downsized_medium
                return { title, id, url }
            })
            return gifs
    })
}