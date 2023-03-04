import { sendRequest } from "../../nextkit/common"

/**
 * @param group_id Group ID (number)
 * @param type Type (string) (talkative/performer/legend/strong_newbie/emotion)
 * @returns group_id Group ID (number)
 * @returns current_talkative Current Talkative (object) (talkative)
 * @returns talkative_list Talkative List (array) (talkative)
 * @returns performer_list Performer List (array) (performer)
 * @returns legend_list Legend List (array) (legend)
 * @returns strong_newbie_list Strong Newbie List (array) (strong_newbie)
 * @returns emotion_list Emotion List (array) (emotion)
 */

export async function getGroupHonorInfo(group_id: number, type: string) {
    const data = {
        "group_id": group_id,
        "type": type
    }
    const json = JSON.stringify(data)
    const response = await sendRequest('/get_group_honor_info', json)
    return response
}