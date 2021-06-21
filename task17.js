// Напишите функцию, которая переделывает строку из camelCase в snake_case.
// Например: solution("redevCourses") -> "redev_courses"

const solution = str => str
    .split('')
    .map(item => item === item.toUpperCase()? '_' + item.toLowerCase():item)
    .join('')


console.log(solution('redevCourses'))