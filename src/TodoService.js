import axios from 'axios';

const url = 'http://localhost:5000/api/todos';

class TodoService {
  static getTodos() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        // console.log("resolving todos list from API")
        resolve(
          res.data.map(todo => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
          })),
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  static insertTodo(todo) {
    // console.log("inserting todo in API: " + todo)
    return axios.post(url, {
      text: todo,
    });
  }

  static deleteTodo(todoID) {
    // console.log("deleting todo in API: " + todoID)
    return axios.delete(`${url}/${todoID}`);
  }
}

export default TodoService;
