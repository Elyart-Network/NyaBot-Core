import { sendRequest } from "../../nextkit/common"

/**
 * @param file File name (string)
 * @returns size File size (number)
 * @returns filename File name (string)
 * @returns url File URL (string)
 */

export default async function getImage(file: string) {
    const data = {
        "file": file
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_image", json)
    return response
}