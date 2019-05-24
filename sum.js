function sum(a, b=0){
    //console.log(a);
    if(a === undefined || a === null){
        throw new Error('ei parametreja annettu');
    }
    let summa = Number(a)+Number(b);
    if(Number.isNaN(summa)){
        throw new Error('ei lukuja');
    }
    return summa;

}

module.exports = sum;