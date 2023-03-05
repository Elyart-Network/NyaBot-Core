import { sendRequest } from "../../nextkit/common"

interface ForwardNode {
    "type": "node",
    "data": any
}

/**
 * @param user_id User ID (number)
 * @param messages Messages (ForwardNode)
 * @returns message_id Message ID (number)
 * @returns forward_id Forward ID (string)
 */

export default async function sendPrivateForwardMsg(user_id: number, messages: Array<ForwardNode>) {
    const data = {
        user_id: user_id,
        messages: messages,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/send_private_forward_msg", json)
    return response
}