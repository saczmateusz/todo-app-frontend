import axios from 'axios';

const url = 'http://localhost:5000/api/todos';

class TodoService {
  static getTodos() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(todo => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
          })),
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  static getTodosThen() {
    return axios.get(url).then(res => res.data).then(data => data.map(todo => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
    })));
  }

  static insertTodo(todo) {
    return axios.post(url, {
      todo,
    });
  }

  static deleteTodo(todoID) {
    return axios.delete(`${url}/${todoID}`);
  }
}

export default TodoService;
