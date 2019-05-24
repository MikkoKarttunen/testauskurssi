function ala(a, b){
    if(a === undefined || a === null || b===undefined || b===null){
        throw new Error('ei parametreja annettu');
    }
    if(a < 0 || b < 0){
        throw new Error('negatiivinen luku');
    }
    let ala = (Number(a)*Number(b))/2;
    if(Number.isNaN(ala)){
        throw new Error('ei lukuja');
    }

    return ala;
    }

module.exports = ala;