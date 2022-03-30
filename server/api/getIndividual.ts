import type { IncomingMessage, ServerResponse } from "http"
import { useQuery } from "h3"
import config from '#config'
import { createClient } from 'microcms-js-sdk'; //ES6

export default (req: IncomingMessage, res: ServerResponse) => {
  // Initialize Client SDK.
  const client = createClient({
    serviceDomain: "exmock", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
    // apiKey: config.mcms,
    apiKey: config.mcms
  });
  const qs = useQuery(req)
  return new Promise((resolve, reject) => {
    client
      .getList({
        endpoint: 'companies',
        queries: {
          filters: `index[equals]${qs.index}`,
          limit: 1
        }
      })
      .then(res => {
        resolve(res.contents[0])
      })
      .catch(err => reject(err))
  })
}
