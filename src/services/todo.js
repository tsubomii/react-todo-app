import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    let taskList = [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false
        }
    ];
    for (let i = 0; i < 1000; i++) {
        taskList.push({
            id: 4 + i,
            text: `task ${4 + i}`,
            completed: false
        });
    }
    return taskList;
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    const index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    const item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
