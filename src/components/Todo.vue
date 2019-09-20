<template>
  <div class="container">
    <h1>Latest Todos</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post" v-for="todo in todos" v-bind:key="todo._id">
        {{ `${todo.createdAt.getDate()}/${todo.createdAt.getMonth()}/${todo.createdAt.getFullYear()}` }}
        <p class="text">{{ todo.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TodoService from '../TodoService';

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
      todo: '',
      error: '',
    };
  },
  async created() {
    try {
      this.todos = await TodoService.getTodos();
    } catch (e) {
      this.error = e.message;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
