import {sendRequest} from "../../nextkit/common";
export default async function setGroupPortrait(group_id: number, file: string, cache: number){
    const data = {
        "group_id": group_id,
        "file": file,
        "cache": cache
    }
    const json = JSON.stringify(data)
    const response = sendRequest("/set_group_portrait", json)
    return response
}