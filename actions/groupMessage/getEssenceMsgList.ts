import { sendRequest } from "../../nextkit/common"

export async function getEssenceMsgList(group_id: number) {
    const data = {
        "group_id": group_id,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_essence_msg_list", json)
    return response
}