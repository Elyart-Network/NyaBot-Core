import { sendRequest } from "../../nextkit/common"

/**
 * @param user_id QQ ID (number)
 * @param message Message (string)
 * @param group_id Group ID (number) (optional)
 * @param auto_escape Auto Escape (boolean) (optional)
 * @returns message_id Message ID (number)
 */

export default async function sendPrivateMsg(user_id: number, message: string, group_id?: number, auto_escape?: boolean) {
    const data = {
        user_id: user_id,
        message: message,
        group_id: group_id,
        auto_escape: auto_escape
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/send_private_msg", json)
    return response
}