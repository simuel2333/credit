import { post } from '../utils/request'
/**
 * 用户注册
 * @param {*} user 
 * email, telephone, password, name
 */
export function registerApi(user) {
    return post('/user/register', user)
}

// export function loginApi(user) {
//     return post('/user/login', user)
// }

// 模拟
export async function loginApi(user) {
    let res = {data:{}}
    console.log(user.email)
    if(user.email.startsWith("jianguan")){
        res.data.data = "supervise"
    } else if(user.email.startsWith("jigou")){
        res.data.data = "institution"
    } else {
        res.data.data = "user"
    }

    res.data.status = "success"
    
    return res
}