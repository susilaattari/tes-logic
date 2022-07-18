

function angka() {
    let result = []
    for (let index = 1; index < 50; index++) {
        result.push(index)
    }
    return result
}
function frondEnd(){
    let arr=angka()
    for (let index = 3-1; index < 50; index+=3) {
        
        arr[index]='FrondEnd'
    }
    return arr
}
function backend() {
    let fe = frondEnd()
    for (let index = 5-1; index < 50; index+=5) {
        
        fe[index]='backend'
    }
    return fe
}

function FrontendBackend() {
    let be = backend()
    for (let index = 15-1; index < 50; index+=15) {
        
        be[index]='Frontend Backend'
    }
    return be
}

console.log(FrontendBackend())