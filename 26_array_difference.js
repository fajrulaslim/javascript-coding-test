function diagonalDifference(arr) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// Contoh penggunaan
const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
const hasil = diagonalDifference(arr);
console.log(hasil);  // Output seharusnya 15