const FACT_URL = 'https://catfact.ninja/fact'
const IMG_URL = 'https://cataas.com/cat/says/'

//Facts
export const fetchFact = async () => {
  return fetch(FACT_URL)
  .then(res => {
    if (!res.ok) {
      throw new Error('Error fetching')
    }
    return res.json()
  })
  .then((data) => {
    const newFact = data.fact
    return newFact
  })
  .catch((e) => {
    console.log(e);
    throw new Error(e)
  })
}

//Images
export const fetchImg = async ({ newImgText }) => {
  return fetch(`${IMG_URL}${newImgText}?json=true`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching img')
      }
      return res.json()
    })
    .then((data) => {
      const newImg = 'https://cataas.com' + data.url
      return newImg
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
