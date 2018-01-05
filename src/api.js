const callApi = url => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
    }, 2000)
  })
)

export const apiLogin = () => callApi('/login')
