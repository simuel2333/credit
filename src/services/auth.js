import { post } from '../utils/request'
/**
 * 用户注册
 * @param {*} user 
 * email, telephone, password, name
 */
export function registerApi(user) {
    return post('/user/register', user)
}

export function loginApi(user) {
    return post('/user/login', user)
}