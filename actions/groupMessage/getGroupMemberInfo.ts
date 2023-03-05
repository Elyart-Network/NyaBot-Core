import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @param user_id QQ ID (number)
 * @param no_cache No Cache (boolean) (optional)
 * @returns group_id Group ID (number)
 * @returns user_id QQ ID (number)
 * @returns nickname Nickname (string)
 * @returns card Card (string)
 * @returns sex Sex (string) (male/female/unknown)
 * @returns age Age (number)
 * @returns area Area (string)
 * @returns join_time Join Time (number)
 * @returns last_sent_time Last Sent Time (number)
 * @returns level Level (string)
 * @returns role Role (string) (owner/admin/member)
 * @returns unfriendly Unfriendly (boolean)
 * @returns title Title (string)
 * @returns title_expire_time Title Expire Time (number)
 * @returns card_changeable Card Changeable (boolean)
 * @returns shut_up_timestamp Shut Up Timestamp (number)
 */

export default async function getGroupMemberInfo(group_id: number, user_id: number, no_cache?: boolean) {
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "no_cache": no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_member_info", json)
    return response
}