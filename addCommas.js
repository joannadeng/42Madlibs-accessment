function addCommas(num) {
    const str = Math.abs(num).toString()
    const n = str.length
     if( n <= 3) {
        if(num > 0) {
            return str;
        }
        return '-' + str;
     };

     let newStr = '';
     const times = Math.floor(n/3);
     const rem = n%3;
     if( rem != 0) {
        for(let i = 0; i < times; i++){
            newStr =',' + str.slice(Math.max(n - 3 * (i + 1)),n - i * 3) + newStr;
        }
        newStr = str.slice(0,rem) + newStr;
        console.log(newStr)
     } 

     if( rem === 0) {
        for(let i = 0; i < times - 1; i++) {
            newStr =',' + str.slice(Math.max(n - 3 * (i + 1)),n - i * 3) + newStr;
        }
        newStr = str.slice(0,3) + newStr;
     }

     if (num > 0) {
        return newStr;
     }
     return '-'+ newStr;
}

module.exports = addCommas;