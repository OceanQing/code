

function toString(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

function isObject(value) {
    return toString(value) === 'Object'
}
function isArray(value) {
    return toString(value) === 'Array'
}

function clone(value) {
    if (isObject(value)) {
        return cloneObject(value)
    } else if (isArray(value)) {
        return cloneArray(value)
    } else {
        return value
    }
}

function cloneObject(obj, result = {}) {
    for (let key in obj) {
        let value = obj[key]
        if (isObject(value)) {
            result[key] = cloneObject(value)
        } else if (isArray(value)) {
            result[key] = cloneArray(value)
        } else {
            result[key] = obj[key]
        }
    }
    return result
}

function cloneArray(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (isObject(value)) {
            result[i] = cloneObject(value)
        } else if (isArray(value)) {
            result[i] = cloneArray(value)
        } else {
            result[i] = arr[i]
        }
    }
    return result
}


let target1 = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

let target2 = clone(target1)

target1.field1 = 123
target1.field4[1] = 123
target1.field4[2] = 123

console.log(target1)
console.log(target2)