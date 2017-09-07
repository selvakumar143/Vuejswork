Vue.component('todo-item', {
  template: `
    <li><table border:1px><tr><td>
      {{ title }}</td>
     <td> <button v-on:click="$emit(\'remove\')">X</button></td></tr></table>
    </li>`
  ,
  props: ['title']
})
new Vue({
  el: '#mnu',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})