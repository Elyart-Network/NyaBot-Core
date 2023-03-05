import { sendRequest } from "../../nextkit/common"

export default async function setGroupWholeBan(group_id: number, flag: string, duration: number){
    const data = {
        "group_id": group_id,
        "flag": flag,
        "duration": duration
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_whole_ban", json)
    return response
}