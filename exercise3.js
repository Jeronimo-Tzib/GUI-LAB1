const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentID: '12345',
    courses: []
}

function getFullName (student){
    return `${student.firstName} ${student.lastName}`;
}

console.log(getFullName(student)); // Output: John Doe

function enrollCourse(student, courseName){
    student.courses.push(courseName);
}
enrollCourse(student, 'CMPS2212');
enrollCourse(student, 'MATH2210');

console.log(student.courses); // Output: ['Mathematics', 'Physics']

function getCourseCount (student){
    return student.courses.length;
}

console.log(getCourseCount(student)); // Output: 2