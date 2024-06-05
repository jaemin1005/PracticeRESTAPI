//! 분류규격 라면볶음면 
// interface Ramen {
//   name : string;
//   class : "볶음면" | "일반",
//   order : string[]
//   bowl : string
//   after : "물" | "소주" | "커피"
// }

interface Ramen {
  name : string,
  water : string,
  addFood : string
}


class HyeonRamen implements Ramen {
  name : string;
  water : string;
  addFood: string;
  
  constructor(name : string, water : string, addFood : string){
    this.name = name;
    this.water = water;
    this.addFood = addFood;
  }

  set Ramename(name : string){
    if(name !== "진라면")
      console.error("진라면이 아니야 :)")
    
  }
}
