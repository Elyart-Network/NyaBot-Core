import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @param no_cache No Cache (boolean) (optional)
 * @returns json (array)
 * @returns json.group_id Group ID (number)
 * @returns json.user_id QQ ID (number)
 * @returns json.nickname Nickname (string)
 * @returns json.card Card (string)
 * @returns json.sex Sex (string) (male/female/unknown)
 * @returns json.age Age (number)
 * @returns json.area Area (string)
 * @returns json.join_time Join Time (number)
 * @returns json.last_sent_time Last Sent Time (number)
 * @returns json.level Level (string)
 * @returns json.role Role (string) (owner/admin/member)
 * @returns json.unfriendly Unfriendly (boolean)
 * @returns json.title Title (string)
 * @returns json.title_expire_time Title Expire Time (number)
 * @returns json.card_changeable Card Changeable (boolean)
 * @returns json.shut_up_timestamp Shut Up Timestamp (number)
 */

export default async function getGroupMemberList(group_id: number, no_cache?: boolean) {
    const data = {
        group_id: group_id,
        no_cache: no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_member_list", json)
    return response
}