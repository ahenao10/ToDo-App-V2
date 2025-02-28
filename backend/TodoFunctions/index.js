const fs = require('fs');
let todos = require('./todos.json');

module.exports = {
    add: (todoToAdd) => {
        try {
            todos.push(todoToAdd);
            fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
            console.log('Todo agregado!');
            return todos;
        } catch (error) {
            console.log(error);
            return { error: 'No se pudo agregar el todo', message: error.message };
        }
    },
    update: (todoToUpdate) => {
        try {
            const index = todos.findIndex(todo => todoToUpdate.text === todo.text);
            if (index !== -1) {
                todos[index] = todoToUpdate;
                fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
                console.log('Todo actualizado!');
                return todos;
            } else {
                console.log('No se encontro el todo');
                return { error: 'No se encontro el todo' };
            }
        } catch (error) {
            console.log(error);
            return { error: 'No se pudo actualizar el todo', message: error.message };
        }
    },
    delete: (todoToDelete) => {
        try {
            const index = todos.findIndex(todo => todoToDelete.text === todo.text);
            if (index !== -1) {
                todos.splice(index, 1);
                fs.writeFileSync('./TodoFunctions/todos.json', JSON.stringify(todos, null, 2));
                console.log('Todo eliminado!');
                return todos;
            } else {
                console.log('No se encontro el todo');
                return { error: 'No se encontro el todo' };
            }
        } catch (error) {
            console.log(error);
            return { error: 'No se pudo eliminar el todo', message: error.message };
        }
    }
}