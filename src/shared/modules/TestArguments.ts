export interface tempObj {
  a : string
  b : string
}

//* arguemnts의 활용은 any타입으로 명시되어 있다. 
//* 사용하면 안될듯함 :)                              
export function ForOfArguments(...args : tempObj[]){
  const arrArgs = arguments

  for(const obj of arguments){
    for(const property in obj){
      console.log(`${property} : ${obj[property]}`);
    }
  }
}
