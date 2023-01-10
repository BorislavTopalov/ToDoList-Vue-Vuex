<script>
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import "bootstrap/dist/css/bootstrap.css";
import {mapGetters} from "vuex";
import "../src/assets/style.scss"

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos"
    })
  }
}
</script>

<template>
  <div id="app">
    <h1>My Todo List</h1>
    <h5>Completed Todos: {{ completedTodos }}</h5>
    <h5>Pending Todos: {{ pendingTodos }}</h5>
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<style scoped>

</style>
