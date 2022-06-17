'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const compareArr_1 = __importDefault(require('./compareArr'));
const arr1 = [1, 3, 5, 6, 7, 8, 9];
const arr2 = [2, 4, 6, 6, 7, 9, 16, 70, 98];
console.log('list =>', (0, compareArr_1.default)(arr1, arr2));
