// try {
//     JSON.parse({ name: 20 });
// } catch (err) {
//     console.log("------>", err.message);
// }
function fun1() {
    try {
        let ARR = [1, 2, 3, 4, 5];
        let matchEle = ARR.find((e) => e === 30);
        console.log("🚀 ~ file: try-catch.js:11 ~ fun1 ~ matchEle:", matchEle);
        if (!matchEle) {
            throw new Error("data not found");
        } else {
            return matchEle;
        }
    } catch (error) {
        return error.message;
    }
}
let a=fun1()
console.log("🚀 ~ file: try_cache.js:21 ~ a:", a)

//   let data = JSON.stringify({ name: 20 });
//   console.log("🚀 ~ file: try-catch.js:17 ~ data:", typeof data);
// let x = fun1({ name: 1 });
// console.log("🚀 ~ file: try-catch.js:18   x:", x);
let stringLength = "userInput"
let LenghtOfString = stringLength.length
console.log("🚀 ~ file: try_cache.js:29 ~ LenghtOfString:", LenghtOfString)
