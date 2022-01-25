console.log("----- Function에서 Generic 사용 -----");
function merge<A, B>(a: A, b: B): A&B {
  return{
    ...a,
    ...b
  };
}
const merged = merge({foo:1}, {bar:1});
console.log(merged);

function wrap<T>(param: T){
  return{
    param
  }
}
const wrapped = wrap(10);
console.log(wrapped);

console.log("----- Interface에서 Generic 사용 -----");
interface Items<T>{
  list: T[];
}
const items: Items<string> = {
  list: ['1', 'b', 'c']
}
console.log(items);

console.log("----- Type Alias에서 Generic 사용 -----");
type ItemsType<T> = {
  list: T[];
};
const itemsType: ItemsType<string> = {
  list: ['a','b','c']
};
console.log(itemsType);

console.log("----- 클래스에서 Generics사용 -----");
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
