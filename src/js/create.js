function CreateTodo(title, description, dueDate, priority, note, checkList = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.checkList = checkList;
}

CreateTodo.prototype.addCheckList = function (item) {
    this.checkList.push({ item: item, completed: false });
};

CreateTodo.prototype.setCheckList = function (index) {
    if (index >= 0 && index < this.checkList.length) {
        this.checkList[index].completed = true;
    }
};

CreateTodo.prototype.al = function (p) {
    console.log(p);
};

module.exports = {CreateTodo}