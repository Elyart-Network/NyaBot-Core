import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @param no_cache No Cache (boolean) (optional)
 * @returns group_id Group ID (number)
 * @returns group_name Group Name (string)
 * @returns group_memo Group Memo (string)
 * @returns group_create_time Group Create Time (number)
 * @returns group_level Group Level (number)
 * @returns member_count Member Count (number)
 * @returns max_member_count Max Member Count (number)
 */

export default async function getGroupInfo(group_id: number, no_cache?: boolean) {
    const data = {
        group_id: group_id,
        no_cache: no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_info", json)
    return response
}