<template>
  <div>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
}
</script>

<style scoped>

</style>