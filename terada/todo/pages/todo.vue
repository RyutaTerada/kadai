<template>
  <div class="wrap">
    <h1>TODO LIST</h1>
    <ul v-cloak>
      <h1>ad</h1>
      <!-- v-forとはfor文の役割を果たす、今回はリストをfor文で並べる -->
      <!-- v-for="変数 in 対象の配列"と記述する -->
      <!-- v-forを使う場合は合わせてkeyの設定が必要 -->
      <!-- keyは他と被ってはいけない -->
      <li v-for="todo in todos" :key="todo">
        <p>ID : {{ todo.id }}</p>
        <p>Text : {{ dones.text }}</p>
        <v-btn v-on:click="doneTodo(todo.id)">Done</v-btn>
        <h1>acv</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 進行中のリスト
      todos: [],
      // 完了済みのリスト
      dones: []
    };
  },

  methods: {
    // function(e)のeはevent、consoleで役に立つ
    addTodoText: function(e) {
      var text = e.target.value;
      this.$store.dispatch("addTodo", { text: text });
      e.target.value = "";
    },
    doneTodo: function(id) {
      this.$store.dispatch("done", { id: id });
    }
  },

  actions: {
    addTodo(context, todo) {
      context.commit("ADD_TODO", todo.text);
    },
    done(context, todo) {
      context.xommit("DONE_TODO", todo.id);
    },
    reset(context, todo) {
      context.commit("RESET_TODO", todo.id);
    }
  },
  mutations: {
    ADD_TODO(state, text) {
      var todo = {
        id: 0,
        text: text
      };
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length - 1].id + 1;
      }
      state.todos.push(todo);
    },
    DONE_TODO(state, id) {
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === id) {
          state.dones.push(state.todos[i]);
          state.todos.splice(i, 1);
          break;
        }
      }
    },
    RESET_TODO(state, id) {
      var todo = {};
      for (var i = 0; i < state.dones.length; i++) {
        if (state.dones[i].id === id) {
          todo = state.dones[i];
          state.dones.splice(i, 1);
          break;
        }
      }
      state.todos.push(todo);
      state.todos.sort(function(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    }
  }
};
</script>

<style>
main {
  display: flex;
}
ul {
  list-style: none;
}
.wrap {
  padding: 0 10px;
}
[v-cloak] {
  display: none;
}
</style>