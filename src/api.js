import fetch from 'isomorphic-fetch'

const callApi = url => {
  fetch(url).then(response => {
    console.log(response.text())
  })
}

export const apiLogin = () => callApi('/movie/top250')
