function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        let gradeString = grade.toString();
        let gradeLen = gradeString.length;
        if (grade <= 40) {
            return grade
        } else {
            let rounded = Number(gradeString[gradeLen - 1]) > 5 ? Math.round(grade / 10, 0) * 10 : Math.round(grade / 10, 0) * 10 + 5;
            if(Math.abs(rounded-grade)<3){
                return rounded
            } else {
                return grade
            }

        }
    })
}

console.log(gradingStudents([23,78,98,92]))