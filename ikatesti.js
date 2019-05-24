function ika(a){
    if (isNaN(Number(a))){
        throw new Error('ei lukuja');
    }
    else if(a>=18){
        return true;
    }
    else if(a<18){
        return false;
    }
}
module.exports = ika;
