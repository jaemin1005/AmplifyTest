"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.listen(3000, () => {
    console.log("Amplify Test");
    console.log("http://localhost:3000");
});
//# sourceMappingURL=app.js.map