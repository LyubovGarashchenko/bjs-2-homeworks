function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
    if(this.hasOwnProperty('marks')) {
        return this.marks.push(...marks);
    } 
}

Student.prototype.getAverage = function() {
    if (this.marks && this.marks.length !== 0) {
        return sum = this.marks.reduce((acc, mark) => acc + mark / this.marks.length, 0);
    } else {
        return 0;
    }
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
}
