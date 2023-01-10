<template>
  <div class="todo-form">
    <input class="form-control" type="text" v-model="newTodo" placeholder="Add new todo...">
    <button class="btn btn-primary" @click="addNewTodo">Add</button>
  </div>
</template>

<script>
import "../assets/style.scss";
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "TodoForm",
  setup() {
    const newTodo = ref("");
    const store = useStore();

    function addNewTodo() {
      store.dispatch("addNewTodoItem", newTodo.value);
      newTodo.value = "";
    }

    return {
      newTodo,
      addNewTodo
    }
  }
}
</script>

<style scoped>

</style>