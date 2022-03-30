import type { IncomingMessage, ServerResponse } from "http"
import config from '#config'
import { createClient } from 'microcms-js-sdk'; //ES6

export default (req: IncomingMessage, res: ServerResponse) => {
  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "exmock", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    // apiKey: config.mcms,
    apiKey: config.mcms
  });
  return new Promise((resolve, reject) => {
    client
      .get({
        endpoint: 'companies',
        queries: {
          fields: ['id']
        }
        // endpoint: 'cards',
        // queries: { filters: `name[equals]${name}` }
      })
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => reject(err))
  })
}
