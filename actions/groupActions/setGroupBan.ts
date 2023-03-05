import {sendRequest} from "../../nextkit/common";

export default async function setGroupBan(group_id: number, user_id: number,duration: number) {
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "duration": duration
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_ban", json)
}