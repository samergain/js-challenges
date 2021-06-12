//destructuring
// const arr = [1,2,3];
// let[value1]=arr; //value1 = 1

// let[_,...value3] = arr;

// console.log(`v1 = ${value1}, v3 = ${value3}, _ = ${_}`);

//classroom is an object that has 2 properties: hasTA boolean, classList array
//if hasTA is true, the first name in classList is the teacher, the second is the TA, and the rest are the students
//if hasTA is false, the first is teacher and the rest are students
//we need a function to return the students list

function getStudents(classroom){
    let {hasTA,classList} = classroom;
    let teacher, ta, students;
    if(hasTA){
        [teacher, ta, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

let class1 = {
    hasTA: true,
    classList: ['Samer', 'Ahmed', 'Farah', 'Jack']
}
let class2 = {
    hasTA: false,
    classList: ['Omar','Rahma','Firas', 'Pokibu']
}

console.log(getStudents(class1));
console.log(getStudents(class2));