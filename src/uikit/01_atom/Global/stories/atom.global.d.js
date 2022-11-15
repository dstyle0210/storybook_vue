export const docsPath = {
    viewLabel:"/?path=/story/uikit-atom-global-viewlabel",
    liveStreamingInfo:"/?path=/docs/uikit-atom-global-livestreaminginfo",
    goodsName:"/?path=/docs/uikit-atom-goods-goodsname",
    goodsPrice:"/?path=/docs/uikit-atom-goods-goodsprice"
}

// LiveStreamingInfo
export const LiveStreamingInfoIF = `{
    type:"null"|"time"|"countdown"|"refresh",
    time?:Date|number|string,
    dueDate?:Date|string
}`

// GoodsName
export const GoodsNameIF = `{
    text:string,
    rows?:number,
    labels?:("tvGoods"|"mobilelive"|"traditional")[]
}`

export const GoodsPriceIF = `{
    price:number,
    type?:"discount"|"deal"|"rental"|"recurrent"|"hidden-discount"|"hidden-deal", // 표시형식
    origin?:number, 
    isOptions?:boolean
}`