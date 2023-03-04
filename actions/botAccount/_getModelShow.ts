import { sendRequest } from "../../nextkit/common"

/**
 * @param model Model Name (string)
 * @returns variants (array)
 * @returns variants.model_show Name (string)
 * @returns variants.need_pay (boolean)
 */

export default async function _getModelShow(model: string) {
    const data = {
        model: model
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/_get_model_show", json)
    return response
}