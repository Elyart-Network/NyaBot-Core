import { sendRequest } from "../../nextkit/common"

/**
 * @returns yes Can send image (boolean)
 */

export default async function canSendImage() {
    const response = await sendRequest("/can_send_image")
    return response
}