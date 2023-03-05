import {sendRequest} from "../../nextkit/common";

export default async function setGroupAdmin(group_id: number, user_id: number, enable?: boolean) {
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "enable": enable
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_admin", json)
    return response
}