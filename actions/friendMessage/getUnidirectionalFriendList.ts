import { sendRequest } from "../../nextkit/common"

/**
 * @returns Json (array)
 * @returns Json.user_id Friend ID (number)
 * @returns Json.nickname Friend Nickname (string)
 * @returns Json.source Friend Source (string)
 */

export default async function getUnidirectionalFriendList() {
    const response = await sendRequest("/get_unidirectional_friend_list")
    return response
}