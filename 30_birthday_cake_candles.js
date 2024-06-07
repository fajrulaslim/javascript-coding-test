function birthdayCakeCandles(arr) {
    // Mencari nilai maksimum menggunakan Math.max dan spread operator
    const maxVal = Math.max(...arr);
    
    // Menghitung jumlah kemunculan nilai maksimum
    let countMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxVal) {
            countMax++;
        }
    }
    
    return { maxVal, countMax };
}

// Contoh penggunaan
const arr = [3, 5, 7, 2, 8, 10, 11, 11, 6];
const result = birthdayCakeCandles(arr);
console.log(`Nilai maksimum: ${result.maxVal}`);
console.log(`Jumlah kemunculan nilai maksimum: ${result.countMax}`);
