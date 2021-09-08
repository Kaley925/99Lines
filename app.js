let friends = ["hunter", "margaret", "simon", "sharon", "scott"]

for (let count = 0; count < friends.length; count++) {
    for (let i = 99; i > 0; i--) {
        let j = i - 1;
        if (i > 2) {
            console.log(i + " lines of code in the file, " + i, " lines of code; " + friends[count] + " strikes one out, clears it all out " + j + " lines of code in the file.")
        } else if (i == 2) {
            console.log(i + " lines of code in the file, " + i, " lines of code; " + friends[count] + "  strikes on out, clears it all out " + j + " line of code in the file.")
        } else {
            console.log(i + " line of code in the file, " + i + " line of code; " + friends[count] + " strikes one out, clears it all out no more lines of code in the file")
        }
    }
}
