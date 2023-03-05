import {sendRequest} from "../../nextkit/common";

export default async function _getGroupNotice(group_id: number){
    const data = {
        "group_id": group_id
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/_get_group_notice", json)
    return response
}