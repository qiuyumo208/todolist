const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2];
  }

  listAllTodos() {
    //ʵ�ֲ鿴����todos�ķ���
  }

  findTodoBy(id) {
    //ʵ��ͨ��id�鿴����todo�ķ���
  }

  createTodo(todoBody) {
    //ʵ�ִ�����todo��¼�ķ���
  }

  updateTodo(id, update) {
    //ʵ��ͨ��id��һ�����¶���������todo��¼�ķ���
  }

  deleteTodoBy(id) {
    //ʵ��ͨ��id��ɾ��todo��¼�ķ���
  }
}

module.exports = new TodoListRepository();