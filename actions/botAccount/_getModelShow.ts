import { sendRequest } from "../../common"

/**
 * @param model Model Name (string)
 * @returns variants of model_show (json array)
 */

export default async function _getModelShow(model: string) {
    const data = {
        model: model
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/_get_model_show", json)
    return response
}