import { sendRequest } from "../../nextkit/common"

/**
 * @param file File name (string) (0B38145AA44505000B38145AA4450500.silk)
 * @param out_format Output format (string) (mp3/amr/wma/m4a/spx/ogg/wav/flac)
 * @returns 
 */

export default async function getRecord(file: string, out_format: string) {
    const data = {
        "file": file,
        "out_format": out_format
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_record", json)
    return response
}