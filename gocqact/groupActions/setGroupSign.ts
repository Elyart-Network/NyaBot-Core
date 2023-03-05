import { sendRequest } from "../../nextkit/common"

export default async function setGroupSign(group_id: number) {
    const data = {
        "group_id": group_id
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/setGroupSign", json)
    return response
}