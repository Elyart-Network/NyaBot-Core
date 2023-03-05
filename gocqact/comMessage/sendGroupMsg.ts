import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @param message Message (string)
 * @param auto_escape Auto Escape (boolean) (optional)
 * @returns message_id Message ID (number)
 */

export default async function sendGroupMsg(group_id: number, message: string, auto_escape?: boolean) {
    const data = {
        group_id: group_id,
        message: message,
        auto_escape: auto_escape
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/send_group_msg", json)
    return response
}