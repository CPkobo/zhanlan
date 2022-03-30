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
          filters: `category[equals]${qs.catname}`,
          limit: 999
        }
      })
      .then(res => {
        resolve(res.contents)
      })
      .catch(err => reject(err))
  })
}
