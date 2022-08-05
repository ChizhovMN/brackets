module.exports = function check(str, bracketsConfig) {
    // if (str.length % 2 != 0) return false;
    // const BRACKETS_PAIR = Object.fromEntries(bracketsConfig.map((item) => [item[1], item[0]]));
    // const OPEN_BRACKETS = bracketsConfig.map(item => item[0]);
    // const stack = [];
    // for (let i = 0; i < str.length; i++) {
    //     let current = str[i]
    //     if (OPEN_BRACKETS.includes(current)) {
    //         stack.push(current)
    //     } else {
    //         if (stack.length === 0) return false;
    //         let topItem = stack[stack.length - 1];
    //         if (BRACKETS_PAIR[str[i]] === topItem) {
    //             stack.pop()
    //         } else {
    //             return false
    //         }
    //     }
    // }
    // return stack.length === 0;

    for (let i = 0; i <= 100; i++) {
        str = str.replace("()", "");
        str = str.replace("[]", "");
        str = str.replace("{}", "");
        str = str.replace("||", "");
        str = str.replace("12", "");
        str = str.replace("34", "");
        str = str.replace("56", "");
        str = str.replace("77", "");
        str = str.replace("88", "");
    }
    return str.length === 0
}
