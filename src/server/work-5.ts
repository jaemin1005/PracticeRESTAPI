interface Ramen {
  name : string;
  class : "볶음면" | "일반",
  order : string[]
  bowl : string
  after : "물" | "소주" | "커피"
}

const songRamen : Ramen = {
  name : "진라면 순한맛",
  class : "볶음면",
  order : ["물 300ml", "끓이면서 고추장 반스푼, 설탕 반스푼", "후레이크 다넣기", "스프는 1/2 ~ 1/3 넣기", "물끓면 면넣고", "물 다 없어질때까지 조리기",
    "채다치즈 한장 올리기"],
  bowl : "끓인 냄비 그대로 먹는편",
  after : "물"
}