import { sendRequest } from "../../nextkit/common"

/**
 * @param flag Request Flag (string)
 * @param approve Approve (boolean)
 * @param remark Remark (string)
 * @returns Nothing (null)
 */

export default async function setFriendAddRequest(flag: string, approve: boolean, remark: string) {
    const data = {
        "flag": flag,
        "approve": approve,
        "remark": remark
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/set_friend_add_request", json)
    return response
}