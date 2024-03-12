function CreateTodo(title, description, dueDate, priority, note, checkList, index) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.checkList = checkList;
    this.index = index;
}

CreateTodo.prototype.al = function (p) {
    console.log(p);
};

module.exports = {CreateTodo}