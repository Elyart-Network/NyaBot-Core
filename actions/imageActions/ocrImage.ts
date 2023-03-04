import { sendRequest } from "../../nextkit/common"

/**
 * @param image Image ID (string)
 * @returns texts Texts (array)
 * @returns texts.text Text (string)
 * @returns texts.confidence Confidence (number)
 * @returns coordinates Coordinates (vector2[])
 */

export default async function ocrImage(image: string) {
    const data = {
        "image": image
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/ocr_image", json)
    return response
}