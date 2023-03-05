import { sendRequest } from "../../nextkit/common"

/**
 * @returns Json (array)
 * @returns Json.user_id Friend ID (number)
 * @returns Json.nickname Friend Nickname (string)
 * @returns Json.remark Friend Remark (string)
 */

export default async function getFriendList() {
    const response = await sendRequest("/get_friend_list")
    return response
}