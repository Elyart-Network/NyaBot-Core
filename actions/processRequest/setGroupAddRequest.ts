import { sendRequest } from "../../nextkit/common"

/**
 * @param flag Request Flag (string)
 * @param subType Request Type (string) (add/invite)
 * @param approve Approve (boolean)
 * @param reason Reason (string) (Only works when approve is false)
 * @returns Nothing (null)
 */

export default async function setGroupAddRequest(flag: string, subType: string, approve: boolean, reason: string) {
    const data = {
        "flag": flag,
        "sub_type": subType,
        "approve": approve,
        "reason": reason
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/set_group_add_request", json)
    return response
}