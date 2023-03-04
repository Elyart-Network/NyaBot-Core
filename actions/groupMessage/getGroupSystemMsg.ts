import { sendRequest } from "../../nextkit/common"

/**
 * @returns invited_requests Invited Requests (InvitedRequest[])
 * @returns join_requests Join Requests (JoinRequest[])
 */

export async function getGroupSystemMsg() {
    const response = await sendRequest("/get_group_system_msg")
    return response
}