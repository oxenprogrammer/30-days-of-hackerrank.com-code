const processData = (input) => {
    names = input.split('\n');
    const n = parseInt(names[0]);
    const searchSize = names.length - parseInt(n);
    const phoneBook = {};

    for (let i = 1; i <= n; i++) {
        let userInfo = names[i].split(' ');
        phoneBook[userInfo[0]] = userInfo[1];
    }

    for (let j = 1; j < searchSize; j++) {
        let name = names[j + n];
        if (phoneBook.hasOwnProperty(name)) {
            console.log(name + '=' + phoneBook[name]);
        } else {
            console.log('Not found');
        }
    }


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
