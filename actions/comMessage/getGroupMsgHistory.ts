import { sendRequest } from "../../nextkit/common"

/**
 * @param message_seq Message Sequence (number)
 * @param group_id Group ID (number)
 * @returns messages (array)
 * @returns messages.content Message Content (string)
 * @returns messages.sender Sender (object)
 * @returns messages.sender.nickname Sender Nickname (string)
 * @returns messages.sender.user_id Sender QQ ID (number)
 * @returns messages.time Message Time (number)
 */

export default async function getGroupMsgHistory(message_seq: number, group_id: number) {
    const data = {
        message_seq: message_seq,
        group_id: group_id
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_group_msg_history", json)
    return response
}