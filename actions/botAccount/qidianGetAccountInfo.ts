import { sendRequest } from "../../nextkit/common"

/**
 * @returns Unknown (json)
 */

export default async function qidianGetAccountInfo() {
    const response = await sendRequest("/qidian_get_account_info")
    return response
}