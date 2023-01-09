import {createStore} from "vuex";

const store = createStore({
    state: {
        todos: [
            {
                title: "todo 1",
                completed: false,
                inEditMode: false
            },
            {
                title: "todo 2",
                completed: false,
                inEditMode: false
            },
        ]
    },
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === true
            }).length;
        },
        pendingTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === false
            }).length;
        },
    },
    mutations: {
        NEW_TODO(state, todoItem) {
            state.todos.unshift({
                title: todoItem,
                completed: false
            });
        },
        DELETE_TODO(state, todoItem) {
            let index = state.todos.indexOf(todoItem);
            state.todos.splice(index, 1);
        },
        TOGGLE_TODO(state, todoItem) {
            todoItem.completed = !todoItem.completed;
        },
        EDIT_TODO(state, todoItem) {
            todoItem.inEditMode = !todoItem.inEditMode;
        }
    },
    actions: {
        addNewTodoItem({commit}, todoItem) {
            commit('NEW_TODO', todoItem);
        },
        deleteTodoItem({commit}, todoItem) {
            commit('DELETE_TODO', todoItem);
        },
        toggleTodo({commit}, todoItem) {
            commit('TOGGLE_TODO', todoItem);
        },
        editTodo({commit}, todoItem) {
            commit('EDIT_TODO', todoItem);
        }
    }
});

export default store;