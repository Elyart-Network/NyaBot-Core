import { sendRequest } from "../../nextkit/common"

/**
 * @param message_id Message ID (number)
 * @returns Nothing (null)
 */

export default async function deleteMsg(message_id: number) {
    const data = {
        message_id: message_id
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/delete_msg", json)
    return response
}