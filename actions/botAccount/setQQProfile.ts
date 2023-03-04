import { sendRequest } from "../../nextkit/common";

/**
 * @param nickname QQ Nickname (string)
 * @param company Company (string)
 * @param email Email (string)
 * @param college College (string)
 * @param personal_nost Personal Nost (string)
 * @returns Nothing (null)
 */

export default async function setQQProfile(nickname: string, company: string, email: string, college: string, personal_nost: string) {
    const data = {
        nickname: nickname,
        company: company,
        email: email,
        college: college,
        personal_nost: personal_nost
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/set_qq_profile", json)
    return response
}