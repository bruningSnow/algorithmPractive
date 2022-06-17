/**
 * @title 两个有序数组合并排序
 * @description 比较各个有序数组的最大值，从而进行排序，时间复杂度 m + n
 * @param arr1 数组一
 * @param arr2 数组二
 * @returns 排序后的新数组
 */
const compareArr = (arr1: number[], arr2: number[]) => {
  const length_1 = arr1.length;
  const length_2 = arr2.length;
  const result: number[] = [];

  for (let i = length_1 - 1, j = length_2 - 1; i > -1 || j > -1; ) {
    // 赋值最后剩余有序数组部分
    if (i === -1) {
      result[j] = arr2[j];
      j--;
      break;
    }
    if (j === -1) {
      result[i] = arr1[i];
      i--;
      break;
    }

    // 比较两者最大值，并进行存储
    if (arr1[i] > arr2[j]) {
      result[i + j + 1] = arr1[i];
      i--;
    } else if (arr1[i] < arr2[j]) {
      result[i + j + 1] = arr2[j];
      j--;
    } else {
      result[i + j + 1] = arr1[i];
      result[i + j] = arr2[j];
      i--;
      j--;
    }
  }

  return result;
};

export default compareArr;
