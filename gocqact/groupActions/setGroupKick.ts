import {sendRequest} from "../../nextkit/common";

export default async function setGroupKick(group_id: number, user_id: number, reject_add_requests?: boolean){
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "reject_add_requests": reject_add_requests
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_kick", json)
    return response
}