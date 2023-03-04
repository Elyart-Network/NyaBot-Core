import { sendRequest } from "../../nextkit/common"

export async function setGroupName(group_id: number, group_name: string){
    const data = {
        "group_id": group_id,
        "group_name": group_name
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/setGroupName", json)
    return response
} 