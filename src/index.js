module.exports = function reverse (n) {
    let array =[];
    let temp = true; 
    if(n<0)
    {   temp = false;
         let tempArray =String(n).split('');
        tempArray.splice(0, 1);
        array = tempArray.reverse();
    }else{
        array = String(n).split('').reverse();
    }
    return array.join('');
}
