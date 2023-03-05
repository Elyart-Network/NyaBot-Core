import { sendRequest } from "../../nextkit/common"

/**
 * @param message_id Message ID (number)
 * @returns messages (array)
 * @returns messages.content Message Content (string)
 * @returns messages.sender Sender (object)
 * @returns messages.sender.nickname Sender Nickname (string)
 * @returns messages.sender.user_id Sender QQ ID (number)
 * @returns messages.time Message Time (number)
 */

export default async function getForwardMsg(message_id: number) {
    const data = {
        message_id: message_id
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_forward_msg", json)
    return response
}