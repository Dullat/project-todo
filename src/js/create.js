function CreateTodo(title, description, dueDate, priority, notes = [], checkList = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
}

CreateTodo.prototype.addNote = function (note) {
    this.notes.push(note);
};

CreateTodo.prototype.addCheckList = function (item) {
    this.checkList.push({ item: item, completed: false });
};

CreateTodo.prototype.setCheckList = function (index) {
    if (index >= 0 && index < this.checkList.length) {
        this.checkList[index].completed = true;
    }
};

CreateTodo.prototype.log = function () {
    console.log({ title: this.title, date: this.dueDate });
};

module.expoets = {CreateTodo}