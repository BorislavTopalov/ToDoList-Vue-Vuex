<template>
  <div class="todo-form">
    <input class="form-control" type="text" v-model="newTodo" placeholder="Add new todo...">
    <button class="btn btn-primary" @click="addNewTodo">Add</button>
  </div>
</template>

<script>
import "../assets/style.scss"
export default {
  name: "TodoForm",
  data() {
    return {
      newTodo: ""
    }
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch("addNewTodoItem" ,this.newTodo);
      this.newTodo = "";
    }
  }
}
</script>

<style scoped>

</style>