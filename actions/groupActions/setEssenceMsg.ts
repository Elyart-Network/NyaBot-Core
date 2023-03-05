import { sendRequest } from "../../nextkit/common"

export default async function setEssenceMsg(message_id: number) {
    const data = {
        "message_id": message_id
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/setEssenceMsg", json)
    return response
}