const metricunit = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];

function metrictometric(x,from,to){
    let indexof_unit_from = metricunit.indexOf(from);
    let indexof_unit_to = metricunit.indexOf(to);

    if(indexof_unit_from > indexof_unit_to){
        let dif = indexof_unit_from - indexof_unit_to
        return x * 10**dif;
    }else{
        let dif = indexof_unit_to - indexof_unit_from
        return x / 10**dif;
    }
}

function metrictotonm(x,from){
    if(from!="kg"){
       x =  metrictometric(x,from,"kg");
    }
    return x / 1000;
}

function metrictostn(x,from){
    if(from!="kg"){
        x =  metrictometric(x,from,"kg");
    }
    return x * 0.157473;
    
}

function metrictopon(x,from){
    if(from!="kg"){
        x =  metrictometric(x,from,"kg");
    }
    return x / 0.45359237;
}

function metrictoons(x,from){
    if(from!="kg"){
        x =  metrictometric(x,from,"kg");
    }
    return x * 35.274;
}

function tonmtometric(x,to){
    if(to!="kg"){
        x =  metrictometric(x,to,"kg");
    }
    return x * 1000;
}

function tonmtostn(x){
    return metrictostn(tonmtometric(x,"kg"),"kg");
}

function tonmtopon(x){
    return metrictopon(tonmtometric(x,"kg"),"kg");
}

function tonmtoons(x){
    return metrictoons(tonmtometric(x,"kg"),"kg");
}

function stntometric(x,to){
    if(to!="kg"){
        x =  metrictometric(x,to,"kg");
    }
    return x / 0.157473;
}

function stntotonm(x){
    return metrictotonm(stntometric(x,"kg"),"kg");
}

function stntopon(x){
    return x * 14;
}

function stntoons(x){
    return x * 224;
}

function pontometric(x,to){
    if(to!="kg"){
        x =  metrictometric(x,to,"kg");
    }
    return x * 0.45359237;
}

function convert_massa(nilai,unit_from,unit_to){

    if (metricunit.includes(unit_from)){
        if(metricunit.includes(unit_to)){
            return metrictometric(nilai,unit_from,unit_to);
        } else if (unit_to == "tonm"){
            return metrictotonm(nilai,unit_from);
        } else if (unit_to == "stn"){
            return metrictostn(nilai,unit_from);
        } else if (unit_to == "pon"){
            return metrictopon(nilai,unit_from);
        } else if (unit_to == "ons"){
            return metrictoons(nilai,unit_from);
        }
    } else if(unit_from=="tonm"){
        if(metricunit.includes(unit_to)){
            return tonmtometric(nilai,unit_to);
        } else if (unit_to == "stn"){
            return tonmtostn(nilai);
        }else if (unit_to == "pon"){
            return tonmtopon(nilai,unit_from);
        } else if (unit_to == "ons"){
            return tonmtoons(nilai,unit_from);
        }
    } else if(unit_from=="stn"){
        if(metricunit.includes(unit_to)){
            return stntometric(nilai,unit_to);
        } else if (unit_to == "tonm"){
            return stntotonm(nilai);
        }else if (unit_to == "pon"){
            return stntopon(nilai,unit_from);
        } else if (unit_to == "ons"){
            return stntoons(nilai,unit_from);
        }
    } else if(unit_from=="pon"){
        if(metricunit.includes(unit_to)){
            return pontometric(nilai,unit_to);
        } 
        // else if (unit_to == "tonm"){
        //     return stntotonm(nilai);
        // }else if (unit_to == "pon"){
        //     return stntopon(nilai,unit_from);
        // } else if (unit_to == "ons"){
        //     return stntoons(nilai,unit_from);
        // }
    } else {
        return ('Unit Not Defined')
    }
}