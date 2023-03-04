import { sendRequest } from "../../nextkit/common"

/**
 * @param message_id Message ID (number)
 * @returns group If Group Message (boolean)
 * @returns group_id Group ID (number)
 * @returns message_id Message ID (number)
 * @returns real_id Real ID (number)
 * @returns message_type Message Type (string) (group, private)
 * @returns sender Sender (object)
 * @returns sender.nickname Sender Nickname (string)
 * @returns sender.user_id Sender QQ ID (number)
 * @returns time Time (number)
 * @returns message Message (string)
 * @returns raw_message Raw Message (string)
 */

export default async function getMsg(message_id: number) {
    const data = {
        message_id: message_id
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_msg", json)
    return response
}