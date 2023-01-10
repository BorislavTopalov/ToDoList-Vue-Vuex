<template>
  <div class="todo">
    <h5 :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)" v-if="!todo.inEditMode">
      {{ todo.title }}
    </h5>
    <input type="text" v-if="todo.inEditMode" v-model="todo.title" @keyup.enter="editTodo(todo)">
    <button class="btn btn-success"  @click="editTodo(todo)">EDIT</button>
    <button class="btn btn-danger" @click="deleteTodo(todo)">DELETE</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import "../assets/style.scss"

export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    ...mapActions({
      deleteTodo: "deleteTodoItem",
      toggleTodoStatus: "toggleTodo",
      editTodo: "editTodo"
    })
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>