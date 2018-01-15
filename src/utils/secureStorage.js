import Cookies from 'js-cookie'
import AES from 'crypto-js/aes'
import MD5 from 'crypto-js/md5'
import Utf8 from 'crypto-js/enc-utf8'

/*
 * 基于 localStorage 和 cookie 的超简易加密工具
 * localStorage 存储量大，但无过期时间，用于存储海量数据如权限表等
 * cookie 存储量有限，但有过期机制，用来基于用户生成的秘钥
 */

export default {
  // 存数据
  setItem (userName, cacheType, source) {
    const secretKey = MD5(userName + Date.now() + window.accessToken).toString()
    Cookies.set(userName, secretKey, { expires: 3 })
    //
    const json = JSON.stringify(source)
    const secureData = AES.encrypt(json, secretKey)
    window.localStorage.setItem(cacheType, secureData)
  },
  // 取数据
  getItem (userName, cacheType) {
    const secretKey = Cookies.get(userName)
    const data = window.localStorage.getItem(cacheType)
    if (!secretKey || !data) {
      return null
    }
    const result = AES.decrypt(data, secretKey).toString(Utf8)
    return JSON.parse(result)
  }
}
