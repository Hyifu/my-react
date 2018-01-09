import fetch from 'isomorphic-fetch'

const callApi = url => {
  return fetch(url).then(response => {
    const result = response.json()
    if (!response.ok) {
      throw new Error(result)
    }
    return result
  }).then(res => ({ res })
  ).catch(error => ({ error }))
}

export const apiMovieList = type => callApi(`//movie/${type}`)
