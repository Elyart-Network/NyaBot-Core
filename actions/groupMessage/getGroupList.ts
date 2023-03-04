import { sendRequest } from "../../nextkit/common"

/**
 * @param no_cache No Cache (boolean) (optional)
 * @returns json (array)
 * @returns json.group_id Group ID (number)
 * @returns json.group_name Group Name (string)
 * @returns json.group_memo Group Memo (string)
 * @returns json.group_create_time Group Create Time (number)
 * @returns json.group_level Group Level (number)
 * @returns json.member_count Member Count (number)
 * @returns json.max_member_count Max Member Count (number)
 */

export async function getGroupList(no_cache?: boolean) {
    const data = {
        no_cache: no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_list", json)
    return response
}