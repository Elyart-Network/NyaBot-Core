import {sendRequest} from "../../nextkit/common";

export default async function _sendGroupNotice(group_id: number, content: string, image: string) {
    const data = {
        "group_id": group_id,
        "content": content,
        "image": image
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/send_group_notice", json)
    return response
}