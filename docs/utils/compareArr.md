# compareArr

```
合并两个有序数组并排序
```

## 算法：

### 实现代码：

时间复杂度：m + n

```
type TCompareArr = (arr1: number[], arr2: number[]) => any[];

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
```

### 实现思路：

```
每次将两个数组中的最大值取出进行比较，从而选中合并后数组最大值。直到某个数组遍历结束！
```

## 算法演示:

```tsx
import React from 'react';
import { compareArr } from 'algorithmPractive';
export default () => (
  <div>
    <pre>{JSON.stringify(compareArr([1, 2, 3], [1, 4, 5, 6, 23]))}</pre>
  </div>
);
```
