function metrictometric(x,from,to){
    let metricunit = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
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
function metrictomile(x,from){
    if (from!="km"){
        x = metrictometric(x,from,"km");
    }
    return x / 1.609344;
}
function metrictoyrd(x,from){
    if (from!="km"){
        x = metrictometric(x,from,"km");
    }
    return x * 1093.6132983;
}
function metrictoft(x,from){
    if (from!="m"){
        x = metrictometric(x,from,"m");
    }
    return x * 3.280839895;
}
function metrictoinc(x,from){
    if (from!="cm"){
        x = metrictometric(x,from,"cm");
    }
    return x / 2.54;
}

function miletometric(x,to){
    if(to!="km"){
        x = x * 1.609344;
        return metrictometric(x,"km",to)
    }else{
        return  x * 1.609344;
    }
}

function miletoyrd(x){
    return x * 1760
}

function miletoft(x){
    return x * 5280
}

function miletoinc(x){
    return x * 63360
}

function yrdtometric(x,to){
    if(to!="km"){
        x = x / 1093.6132983;
        return metrictometric(x,"km",to)
    }else{
        return  x / 1093.6132983;
    }
}

function yrdtomile(x){
    return x / 1760
}

function yrdtoft(x){
    return x * 3
}

function yrdtoinc(x){
    return x * 36
}

function fttometric(x,to){
    if(to!="m"){
        x = x / 3.280839895;
        return metrictometric(x,"m",to)
    }else{
        return  x / 3.280839895;
    }
}
function fttomile(x){
    return x / 5280
}

function fttoyrd(x){
    return x / 3
}

function fttoinc(x){
    return x * 12
}

function inctometric(x,to){
    if(to!="cm"){
        x = x * 2.54;
        return metrictometric(x,"cm",to)
    }else{
        return  x * 2.54;
    }
}
function inctomile(x){
    return x / 63360
}

function inctoyrd(x){
    return x / 36
}

function inctoft(x){
    return x / 12
}

function convert_panjang(nilai,unit_from,unit_to){

    let metricunit = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

    if (metricunit.includes(unit_from)){
        if(metricunit.includes(unit_to)){
            return metrictometric(nilai,unit_from,unit_to);
        } else if(unit_to=="mile"){
            return metrictomile(nilai,unit_from);
        } else if(unit_to=="yrd"){
            return metrictoyrd(nilai,unit_from);
        } else if(unit_to=="ft"){
            return metrictoft(nilai,unit_from);
        } else if(unit_to=="inc"){
            return metrictoinc(nilai,unit_from);
        }   
    } else if(unit_from == "mile"){
        if(metricunit.includes(unit_to)){
            return miletometric(nilai,unit_to);
        } else if(unit_to=="yrd"){
            return miletoyrd(nilai);
        } else if(unit_to=="ft"){
            return miletoft(nilai);
        } else if(unit_to=="inc"){
            return miletoinc(nilai);
        }
    } else if(unit_from == "yrd"){
        if(metricunit.includes(unit_to)){
            return yrdtometric(nilai,unit_to);
        } else if(unit_to=="mile"){
            return yrdtomile(nilai);
        } else if(unit_to=="ft"){
            return yrdtoft(nilai);
        } else if(unit_to=="inc"){
            return yrdtoinc(nilai);
        }
    } else if(unit_from == "ft"){
        if(metricunit.includes(unit_to)){
            return fttometric(nilai,unit_to);
        } else if(unit_to=="mile"){
            return fttomile(nilai);
        } else if(unit_to=="yrd"){
            return fttoyrd(nilai,unit_from);
        } else if(unit_to=="inc"){
            return fttoinc(nilai);
        }
    } else if(unit_from == "inc"){
        if(metricunit.includes(unit_to)){
            return inctometric(nilai,unit_to);
        } else if(unit_to=="mile"){
            return inctomile(nilai);
        } else if(unit_to=="yrd"){
            return inctoyrd(nilai);
        } else if(unit_to=="ft"){
            return inctoft(nilai);
        }
    } else {
        return ('Unit Not Defined')
    }
}

