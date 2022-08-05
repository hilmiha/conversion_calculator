function ctok(x){
    return  Number(x) + 273.15
}

function ctof(x){
    return (x*9/5)+32
}

function ktoc(x){
    return  Number(x) - 273.15
}

function ktof(x){
    return ctof(ktoc(x))
}

function ftoc(x){
    return (x-32)*5/9
}

function ftok(x){
    return ctok(ftoc(x))
}



function convert_suhu(nilai,unit_from,unit_to){
    if(unit_from == "c"){
        if(unit_to=="k"){
            return ctok(nilai);
        } else if (unit_to=="f"){
            return ctof(nilai);
        }
    } else if(unit_from == "k"){
        if(unit_to=="c"){
            return ktoc(nilai);
        } else if (unit_to=="f"){
            return ktof(nilai);
        }
    } else if(unit_from == "f"){
        if(unit_to=="c"){
            return ftoc(nilai);
        } else if (unit_to=="k"){
            return ftok(nilai);
        }
    } else {
        return ('Unit Not Defined')
    }
}