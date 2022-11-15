// ViewLabel
export interface ViewLabelIF { 
    type:"count"|"live",
    count?:number
}

// LiveStreamingInfo
export interface LiveStreamingInfoIF {
    type:"null"|"time"|"countdown"|"refresh", // 표시형식
    time?:Date|number|string, // type이 time인 경우, 표시할 시간(초)
    dueDate?:Date|string // YYYY-MM-DD HH:MM:SS
}

// GoodsName
export interface GoodsNameIF {
    text:string,
    rows?:number,
    labels?:("tvGoods"|"mobilelive"|"traditional")[]
}

export interface GoodsPriceIF {
    price:number, // 판매가
    type?:"discount"|"deal"|"rental"|"recurrent"|"hidden-discount"|"hidden-deal", // 표시형식
    origin?:number, // 정상가(할인 전)
    isOptions?:boolean // 옵션에 따른 가격 여부
}