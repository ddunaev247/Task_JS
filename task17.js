// Напишите функцию, которая переделывает строку из camelCase в snake_case.
// Например: solution("redevCourses") -> "redev_courses"

const solution = str => str
    .split('')
    .map(item => {
        if (item === item.toUpperCase()){
            return '_' + item.toLowerCase()
        }
        return item
        
    })
    .join('')


console.log(solution('redevCourses'))