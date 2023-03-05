import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @returns json (array)
 * @returns json.sender_id Sender ID (number)
 * @returns json.sender_nick Sender nickname (string)
 * @returns json.sender_time Sender time (number)
 * @returns json.operator_id Operator ID (number)
 * @returns json.operator_nick Operator nickname (string)
 * @returns json.operator_time Operator time (number)
 * @returns json.message_id Message ID (number)
 */

export default async function getEssenceMsgList(group_id: number) {
    const data = {
        "group_id": group_id,
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_essence_msg_list", json)
    return response
}