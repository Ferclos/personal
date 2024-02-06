/* Hernandez Muñoz Fernando Damian.
 * Diseño de Apps.
 * 05/02/2024.
 * 4°B.
*/

const axios = require('axios');
const readline = require('readline');

const todoAPI = 'https://jsonplaceholder.typicode.com/todos';

async function fetchTodos() {
  const response = await axios.get(todoAPI);
  return response.data;
}

function displayTodoList(todoList, fields = ['id', 'title']) {
  console.log('');
  console.log('===== Lista de tareas pendientes =====');
  for (const todo of todoList) {
    const displayText = fields.map(field => `${field}: ${todo[field]}`).join(' - ');
    console.log(displayText);
  }
}

async function displayMenu() {
  console.log('\n===== Menú de la lista de tareas =====');
  console.log('1. Pendientes (solo IDs)');
  console.log('2. Pendientes (IDs y título)');
  console.log('3. Pendientes (ID y título)');
  console.log('4. Pendientes (ID y título)');
  console.log('5. Pendientes (IDs y userId)');
  console.log('6. Pendientes (ID y userId)');
  console.log('7. Pendientes (ID y userId)');
  console.log('8. Salir');
  console.log('==========================');

  const choice = await prompt('Ingrese su elección: ');

  switch (choice) {
    case '1':
      const todosIds = todos.map(todo => todo.id);
      console.log('Lista de todas las tareas (solo IDs):', todosIds);
      break;
    case '2':
      console.log('Lista de todas las tareas (IDs y título):');
      displayTodoList(todos);
      break;
    case '3':
      const unresolvedTodos = todos.filter(todo => !todo.completed);
      console.log('Lista de todas las tareas pendientes (ID y título):');
      displayTodoList(unresolvedTodos);
      break;
    case '4':
      const resolvedTodos = todos.filter(todo => todo.completed);
      console.log('Lista de todas las tareas resueltas (ID y título):');
      displayTodoList(resolvedTodos);
      break;
    case '5':
      console.log('Lista de todas las tareas (IDs y userId):');
      displayTodoList(todos, ['id', 'userId']);
      break;
    case '6':
      const resolvedTodosWithUserId = resolvedTodos.map(todo => ({ id: todo.id, userId: todo.userId }));
      console.log('Lista de todas las tareas resueltas (ID y userId):');
      displayTodoList(resolvedTodosWithUserId, ['id', 'userId']);
      break;
    case '7':
      const unresolvedTodosWithUserId = unresolvedTodos.map(todo => ({ id: todo.id, userId: todo.userId }));
      console.log('Lista de todas las tareas pendientes (ID y userId):');
      displayTodoList(unresolvedTodosWithUserId, ['id', 'userId']);
      break;
    case '8':
      console.log('Saliendo...');
      process.exit();
      break;
    default:
      console.log('Elección inválida. Por favor, ingrese un número entre 1 y 8.');
      break;
  }

  await displayMenu();
}

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return
}
