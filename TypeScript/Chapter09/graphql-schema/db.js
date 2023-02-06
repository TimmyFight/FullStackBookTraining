"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const uuid_1 = require("uuid");
exports.todos = [
    {
        id: (0, uuid_1.v4)(),
        title: "Task 1",
        description: "It is your first task."
    },
    {
        id: (0, uuid_1.v4)(),
        title: "Task 2",
        description: "It is your second task. Take care."
    },
    {
        id: (0, uuid_1.v4)(),
        title: "Task 3",
        description: "Important task!"
    },
];
