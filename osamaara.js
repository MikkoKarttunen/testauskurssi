function jako(a, b){
    if(a === undefined || a === null || b===undefined || b===null){
        throw new Error('ei parametreja annettu');
    }
    let jako = Number(a)/Number(b);
    if(Number.isNaN(jako)){
        throw new Error('ei lukuja');
    }
    return jako;
    }

module.exports = jako;