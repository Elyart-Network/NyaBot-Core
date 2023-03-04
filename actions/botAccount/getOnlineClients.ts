import { sendRequest } from "../../nextkit/common"

/**
 * @param noCache No Cache (boolean)
 * @returns Clients (array)
 * @returns Clients.app_id Client ID (number)
 * @returns Clients.device_name Client Name (string)
 * @returns Clients.device_kind Client Kind (string) 
*/

export default async function getOnlineClients(no_cache: boolean) {
    const data = {
        no_cache: no_cache
    }
    const json = JSON.stringify(data)
    const response = await sendRequest("/get_online_clients", json)
    return response
}