import { sendRequest } from "../../nextkit/common"

export async function getGroupAtAllRemain(group_id: number){
    const data = {
        "group_id": group_id,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_at_all_remain", json)
    return response
}