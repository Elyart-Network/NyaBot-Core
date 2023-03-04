import { sendRequest } from "../../nextkit/common"

interface ForwardNode {
    "type": "node",
    "data": any
}

/**
 * @param group_id Group ID (number)
 * @param messages Messages (ForwardNode)
 * @returns message_id Message ID (number)
 * @returns forward_id Forward ID (string)
 */

export default async function sendGroupForwardMsg(group_id: number, messages: Array<ForwardNode>) {
    const data = {
        group_id: group_id,
        messages: messages,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/send_group_forward_msg", json)
    return response
}