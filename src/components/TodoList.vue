<template>
  <div>
    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "TodoList",
  components: {
    Todo
  },
  setup() {
    const store = useStore();
    const todos = computed(function () {
      return store.state.todos
    })
    return {
      todos: todos,

    }
  }
}
</script>

<style scoped>

</style>