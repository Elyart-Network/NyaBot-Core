import {sendRequest} from "../../nextkit/common";

export default async function setGroupCard(group_id: number, user_id: number, card: string){
    const data = {
        "group_id": group_id,
        "user_id": user_id,
        "card": card
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_card", json)
    return response
}