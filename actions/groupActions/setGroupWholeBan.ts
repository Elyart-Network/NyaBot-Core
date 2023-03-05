import {sendRequest} from "../../nextkit/common";

export default async function setGroupWholeBan(group_id: number, enable: boolean) {
    const data = {
        "group_id": group_id,
        "enable": enable
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_whole_ban", json)
    return response
}