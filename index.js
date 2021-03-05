const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newarray = [...cats, name]
    return newarray
}

function prependCat(name) {
    const newarray = [name, ...cats]
    return newarray
}

function removeLastCat(){
    const newarray = cats.slice(0, cats.length-1)
    return newarray
}

function removeFirstCat(name){
    const newarray = cats.slice(1)
    return newarray
}