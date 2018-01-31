import fetch from 'isomorphic-fetch'
import Cookie from 'js-cookie'

// 真实的 API 请求
const callApi = (url, args) => {
  const params = {
    method: args ? 'POST' : 'GET',
    headers: { token: Cookie.get('accessToken') },
    body: args || null
  }
  return fetch(url, params).then(response => {
    const result = response.json()
    if (!response.ok) {
      throw new Error(result)
    }
    return result
  }).then(res => ({ res })
  ).catch(error => {
    // 处理错误事项
    return { error }
  })
}

// 假冒的 API 请求，参数 data 接受你希望返回的结果
const callFakeApi = data => new Promise(resolve => {
  setTimeout(() => resolve({ res: data }), 2000)
})

//

// 请求 demo
export const apiDemoGet = type => callApi(`/demo/get?name=hiyfu`)
export const apiDemoPost = type => callApi(`/demo/post`, { name: 'hyifu' })
// 权限路由列表
export const apiAuth = () => callFakeApi(
  ['/', '/login', '/music', '/movie', '/movie/list/new_movies', '/movie/list/top250']
)
export const apiMovieList = type => callFakeApi()
