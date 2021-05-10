const array = [1, 2, 3, 4, 5, 6];

const sum = (arr, n) => n <= 0 ? 0 : sum(arr, n - 1) + arr[n - 1];
console.log(sum(array, 6));
