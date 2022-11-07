export const createType = (description,summary) => {
  if(typeof summary=="object"){
    return createTypeSelect(description,summary);
  }else if(!summary){
    return {
      description:description
    }
  }else{
    return {
      description:description,
      table:{
        type:{
            summary:summary
        }
      }
    }
  }
}

export const createTypeSelect = (description,options) => {
  return {
    description:description,
    control: { type: 'select' },
    options: Object.keys(options),
    table:{
      type:{
          summary:`${makeSummary( Object.keys(options) )}`,
          detail:makeDetail(options)
        }
    }
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