/*
createType(description:string,controlType:"text"|"number"|"date"|"select",typeOptions:String|Array);

createType("설명") // 설명만 표시 
createType("설명","controlType","options") // 설명만 표시 
*/

export const createType = (description,controlType,typeOptions) => {
  if(!controlType){
    return {description:description}; // 컨트롤 타입이 없으면 설명문구만 넘기고, 나머지는 스토리북 자동설정에 따른다.
  }
  if(controlType=="text"){ // 컨트롤타입이 text 라면, typeOptions 는 summary로 
    let type = {
      description:description,
      control: { type: 'text' }
    };
    if(typeOptions){
      type.table = {
        type:{
            summary:typeOptions
        }
      }
    };
    return type;
  }

  if(controlType=="number" || controlType=="range"){ // 컨트롤타입이 "number"|"range" 면, typeOptions 은 {min:number,max:number:step:number} 로 바라봄
    let type = {
      description:description,
      control: { type: controlType }
    };
    if(typeof typeOptions=="object"){
      let a = Object.assign(type.control,{
        min:0,
        max:999999,
        step:1
      },typeOptions);
      type.table = {
        type:{
            summary:typeOptions.summary
        }
      };
    }else if(typeof typeOptions=="string"){
      type.table = {
        type:{
            summary:typeOptions
        }
      };
    };
    return type;
  }

  if(controlType=="boolean"){ // 컨트롤타입이 boolean 
    let type = {
      description:description,
      control: { type: 'boolean' }
    };
    return type;
  }

  const enums = ["radio","inline-radio","check","inline-check","select","multi-select"];
  let enumsType = enums.filter(_enum => _enum == controlType); // 컨트롤타입이 enums 중에 하나면, typeOptions 은 내가 만든(;;) options 로 바라봄
  if(enumsType.length){
    let type = {
      description:description,
      control: { type: controlType }
    };
    if(typeOptions){
      type = Object.assign(type,{
        options: Object.keys(typeOptions),
        table:{
          type:{
              summary:`${makeSummary( Object.keys(typeOptions) )}`,
              detail:makeDetail(typeOptions)
            }
        }
      });
    };





    return type;
  }
}

const makeSummary = (options) => {
  return options.map((type)=>{
    return `"${type}"`
  }).join("|");
}


const makeDetail = (options) => {
  return Object.entries(options).map((entry)=>{
    return `"${entry[0]}":"${entry[1]}"`
  }).join("\n");
}