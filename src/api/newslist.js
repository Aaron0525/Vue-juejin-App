import jsonp from 'common/js/jsonp'
import jsonp2 from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getNewslist() {
  const url = '/api/getNewslist'

  const data = {
    src: 'web',
    uid: '5937a30fac502e0068cd1bac',
    device_id: 1498981002405,
    token: 'eyJhY2Nlc3NfdG9rZW4iOiJkc0JUOWtKV1oxcFI1QjYyIiwicmVmcmVzaF90b2tlbiI6IjgyRWJrb05FbWlOVjBiMDgiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjo2MDQ4MDB9',
    limit: 20,
    category: 'all',
    recomment: 1
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getBoilList(disstid) {
  const url = 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_ids'

  const data =  {
    src: 'web',
    uid: '5937a30fac502e0068cd1bac',
    device_id: 1498981002405,
    token: 'eyJhY2Nlc3NfdG9rZW4iOiJVZzRsdWJtUlU3a1daTER6IiwicmVmcmVzaF90b2tlbiI6IlU0SnhaSFAzT05sWUVNM2MiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjo2MDQ4MDB9',
    entryIds: '595d08e16fb9a06bb61fe6b1|594f879a6fb9a06ba5194b88|596645586fb9a06bb4749cac|5974bedb6fb9a06b9a51b98b|595903d4f265da6c2b7678b8|596f94f5f265da6c43674d0e|5953e1aa6fb9a06bb874672e|5951cbea6fb9a06ba519514a|576d00bb128fe1005a1d713e|58148339a22b9d00678379ac|5953bd06f265da6c3f709b55|57a983606be3ff00654d2f78|58b19dfa8d6d8100585f60b5|5716e1c571cfe4006db6f57b|585b99a8ac502e006718a6b8|57c566efa341316fa6313af7|569616cb60b28b0aa6423489|59780e156fb9a06b9f46fdeb|5836f9dd8ac2470065d64196|572c7f5479df540060a8bddc'

  }
  return jsonp2(url, data, options)
}


// export function getDiscList() {
//   const url = '/api/getDiscList'

//   const data = Object.assign({}, commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
//   })

//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

// export function getSongList(disstid) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

//   const data = Object.assign({}, commonParams, {
//     disstid,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     platform: 'yqq',
//     hostUin: 0,
//     needNewCode: 0
//   })

//   return jsonp(url, data, options)
// }