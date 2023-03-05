import { sendRequest } from "../../nextkit/common";

/**
 * @returns user_id QQ Number (int64)
 * @returns nickname QQ Nickname (string)
 */

export default async function getLoginInfo() {
    const response = await sendRequest("/get_login_info")
    return response
}