function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const n = arr.length;

    // Menghitung jumlah positif, negatif, dan nol
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Menghitung rasio
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    // Mencetak rasio dengan enam tempat desimal
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Contoh penggunaan
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
// Output seharusnya:
// 0.500000
// 0.333333
// 0.166667