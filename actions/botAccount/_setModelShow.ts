import { sendRequest } from "../../common"

/**
 * @param model Model Name (string)
 * @param model_show  Model Show (string)
 * @returns Nothing (null)
 */

export default async function _setModelShow(model: string, model_show: string) {
    const data = {
        model: model,
        model_show: model_show
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/_set_model_show", json)
    return response
}