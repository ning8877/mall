import {request} from './request'

export function getDetail(iid){
  return request({
    url:'detail',
    params:{
      iid
    }
  })
}

export class GoodsInfo{
  constructor(itemInfo,colums,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.colums =  colums
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}