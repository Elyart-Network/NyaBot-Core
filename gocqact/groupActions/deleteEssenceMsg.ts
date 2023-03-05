import { sendRequest } from "../../nextkit/common"

export default async function setGroupWholeBan(message_id: number) {
    const data = {
        "message_id": message_id
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_whole_ban", json)
    return response
}