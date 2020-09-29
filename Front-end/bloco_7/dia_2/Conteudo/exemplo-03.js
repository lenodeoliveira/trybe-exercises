const newObj = (obj, newKey, value) => {

    obj[newKey] = value;
    return obj;
}


const obj = {};
console.table(newObj(obj, 'name', 'Lennon'));

