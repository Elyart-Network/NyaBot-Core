import { sendRequest } from "../../nextkit/common"

export default async function setGroupSpecialTitle(group_id: number, user_id: number, special_title: string, duration: number){
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "special_title": special_title,
        "duration": duration
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_special_title", json)
    return response
}