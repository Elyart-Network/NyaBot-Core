import { sendRequest } from "../../nextkit/common"

/**
 * @param user_id QQ Number (number)
 * @param no_cache No Cache (boolean)
 * @returns user_id QQ Number (number)
 * @returns nickname Nickname (string)
 * @returns sex Sex (string)
 * @returns age Age (number)
 * @returns qid QID (string)
 * @returns level Level (number)
 * @returns login_days Login Days (number)
 */

export default async function getStrangerInfo(user_id: number, no_cache: boolean) {
    const data = {
        user_id: user_id,
        no_cache: no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_stranger_info", json)
    return response
}