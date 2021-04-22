Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}

let iterable = [3, 5, 7]
iterable.foo = 'hello'

for (let i in iterable) {
    console.log(i) // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
    console.log(i) 
}