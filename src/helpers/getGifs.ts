export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=5&api_key=1aRvDQc05EjVdIj5PNppdakJs1m145Ux`

  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = await data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return gifs
}
