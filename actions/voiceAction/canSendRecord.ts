import { sendRequest } from "../../nextkit/common"

/**
 * @returns yes Can send record (boolean)
 */

export default async function canSendRecord() {
    const response = await sendRequest("/can_send_record")
    return response
}