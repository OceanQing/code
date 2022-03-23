

function toString(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}

function isObject(value) {
    return toString(value) === 'Object'
}
function isArray(value) {
    return toString(value) === 'Array'
}

function clone(value, map = new Map()) {
    if (isArray(value) || isObject(value)) {
        let cloneValue = isArray(value) ? [] : {}
        if (map.has(value)) {
            return map.get(value)
        }
        map.set(value, cloneValue)
        for (const key in value) {
            cloneValue[key] = clone(value[key], map)
        }
        return cloneValue
    } else {
        return value
    }
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

target1.target1 = target1

let target2 = clone(target1)

target1.field1 = 123
target1.field4[1] = 123
target1.field4[2] = 123

console.log('target1', target1)
console.log('target2', target2)