import type { IncomingMessage, ServerResponse } from "http"
import config from '#config'
import { createClient } from 'microcms-js-sdk'; //ES6
import { randRange } from "../../helpers/rand";

export default (req: IncomingMessage, res: ServerResponse) => {
  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "exmock", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    // apiKey: config.mcms,
    apiKey: config.mcms
  });
  return new Promise((resolve, reject) => {
    client
      .getList({
        endpoint: 'companies',
        queries: { limit: 0 }
      })
      .then(meta => {
        // console.log(meta)
        const indices = randRange(1, meta.totalCount, 18)
        const queries: string[] = []
        indices.forEach(val => {
          queries.push(`index[equals]${val}`)
        })
        client
          .get({
            endpoint: 'companies',
            queries: {
              filters: queries.join('[or]'),
              // filters: 'index[equals]1',
              limit: 8
            }
            // endpoint: 'cards',
            // queries: { filters: `name[equals]${name}` }
          })
          .then(res => {
            resolve(res)
          })
          .catch(err => reject(err))
      })
      .catch(err => reject(err))
  })
}
