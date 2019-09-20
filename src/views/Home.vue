<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Todo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo.vue';

export default {
  name: 'home',
  components: {
    Todo,
  },
};
</script>
