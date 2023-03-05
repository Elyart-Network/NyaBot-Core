import { sendRequest } from "../../nextkit/common"

/**
 * @returns can_at_all If the group can @all (boolean)
 * @returns remain_at_all_count_for_group The number of @all remaining for the group (number)
 * @returns remain_at_all_count_for_uin The number of @all remaining for the user (number)
 */

export default async function getGroupAtAllRemain(group_id: number){
    const data = {
        "group_id": group_id,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_at_all_remain", json)
    return response
}