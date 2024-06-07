function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n-i)
        let hasses = '#'.repeat(i)
        console.log(spaces + hasses)
    }
}

staircase(4)