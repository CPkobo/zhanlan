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
      .getList({
        endpoint: 'companies',
        queries: { limit: 0 }
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

function randRange(min: number, max: number, count: number): number[] {
  const nums: number[] = []
  if (max < count) {
    nums.push(...Array(max).keys())
    return nums.sort(() => Math.random() - 0.5)
  } else {
    while (nums.length < count) {
      const idx = Math.floor(Math.random() * (max - min + 1) + min);
      if (!nums.includes(idx)) {
        nums.push(idx)
      }
    }
    return nums
  }
}