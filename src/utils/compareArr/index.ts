export type TCompareArr = (arr1: number[], arr2: number[]) => any[];

/**
 * @title 合并两个有序数组并进行排序
 * @description
 * @param arr1 有序数组1
 * @param arr2 有序数组2
 * @returns 合并后的有序数组
 */
const compareArr: TCompareArr = (arr1, arr2) => {
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
