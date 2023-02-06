"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const resolvers = {
    Query: {
        getUser: (obj, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            return {
                id: (0, uuid_1.v4)(),
                username: "David",
            };
        }),
        getTodos: (parent, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            return [
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
        }),
    },
};
exports.default = resolvers;
