// 가비지 컬렉션

// user에는 객체 참조 값이 저장된다.
// const user = {
// 	name : "John"
// };

// user의 값을 다른 값으로 덮어쓰면 참조값은 사라진다.
//John을 참조하거나 접근할 방법이 사라지면 가비지 컬렉터는 John을 메모리에서 삭제한다.
// user = null;


// 참조 두개
// 참조를 user에서 admin으로 복사해보자.

// let user = {
// 	name : "John"
// };

// let admin = user;

// user = null;  

// console.log(admin);  // name: 'John'  / admin은 여전히 객체에 접근할수 있기 때문에 메모리가 삭제되지 않는다.
// console.log(user);  // null 



/// 연결된 객체
// 가족관계를 나타내는 복잡한 예시를 살펴보자.

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

// 참조 두 개 삭제
delete family.father;
delete family.mother.husband;

// John은 외부에서 들어오는 참조가 사라졌기 때문에 메모리에서 제거된다.
// Ann은 여전히 도달 가능한 상태이므로 메모리에 남아있다.
console.log(family)

// 도달할 수 없는 섬
// 근원 객체 family를 아무것도 참조하지 않게 하면

family = null;

// 메모리 내부에서는 family객체와 루트의 연결이 사라져 참조하는 것이 없게되어
// 객체 전부가 메모리에서 제거된다.
console.log(family)