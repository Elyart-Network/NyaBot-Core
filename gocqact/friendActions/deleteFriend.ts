import { sendRequest } from "../../nextkit/common"

/**
 * @param user_id Friend ID (number)
 * @returns Nothing (null)
 */

export default async function deleteFriend(user_id: number) {
    const data = {
        user_id: user_id
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/delete_friend", json)
    return response
}