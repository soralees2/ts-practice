// Shape라는 interface 선언
interface Shape {
  // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환타입은 number
  getArea(): number; 
}

class Circle implements Shape{
  // implements 키워드를 사용해서 해당 클래스가 Shape interface의 조건을 충족하겠다는것을 명시

  radius: number; // 멤버변수 radius값을 설정

  constructor(radius: number){
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number){
    this.width = width:;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})
