window.onload = function(){
    document.getElementById("nilai_x").addEventListener('input', convert);
    document.getElementById("nilai_y").addEventListener('input', convert);
}

let btn_from_sebelumnya = "btn_from_km"
function setUnitForm(x,y){
    document.getElementById(btn_from_sebelumnya).classList.remove("active");
    btn_from_sebelumnya = y;
    document.getElementById(y).classList.add("active");
    document.getElementById("unit_from").value = x;
    convert()
}


let btn_to_sebelumnya = "btn_to_km"
function setUnitTo(x,y){
    document.getElementById(btn_to_sebelumnya).classList.remove("active");
    btn_to_sebelumnya = y;
    document.getElementById(y).classList.add("active");
    document.getElementById("unit_to").value = x;
    convert()
}

function validate(x){
    let re = /^[-+]?[0-9]*\.?[0-9]+$/;

    return (re.test(x));
}

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


function convert(){
    let nilai_x = document.getElementById("nilai_x");
    let nilai_y = document.getElementById("nilai_y");

    let unit_from = document.getElementById("unit_from");
    let unit_to = document.getElementById("unit_to");

    if(nilai_x.value != "" ){
        if (validate(nilai_x.value) == true){
            nilai_x.classList.remove("is-invalid");
            nilai_y.classList.remove("is-invalid");
            
            let metricunit = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

            if (unit_from.value == unit_to.value) {
                nilai_y.value = nilai_x.value
            }

            if (metricunit.includes(unit_from.value)){
                if(metricunit.includes(unit_to.value)){
                    nilai_y.value = metrictometric(nilai_x.value,unit_from.value,unit_to.value);
                } else if(unit_to.value=="mile"){
                    nilai_y.value = metrictomile(nilai_x.value,unit_from.value);
                } else if(unit_to.value=="yrd"){
                    nilai_y.value = metrictoyrd(nilai_x.value,unit_from.value);
                } else if(unit_to.value=="ft"){
                    nilai_y.value = metrictoft(nilai_x.value,unit_from.value);
                } else if(unit_to.value=="inc"){
                    nilai_y.value = metrictoinc(nilai_x.value,unit_from.value);
                }   
            } else if(unit_from.value == "mile"){
                if(metricunit.includes(unit_to.value)){
                    nilai_y.value = miletometric(nilai_x.value,unit_to.value);
                } else if(unit_to.value=="yrd"){
                    nilai_y.value = miletoyrd(nilai_x.value);
                } else if(unit_to.value=="ft"){
                    nilai_y.value = miletoft(nilai_x.value);
                } else if(unit_to.value=="inc"){
                    nilai_y.value = miletoinc(nilai_x.value);
                }
            } else if(unit_from.value == "yrd"){
                if(metricunit.includes(unit_to.value)){
                    nilai_y.value = yrdtometric(nilai_x.value,unit_to.value);
                } else if(unit_to.value=="mile"){
                    nilai_y.value = yrdtomile(nilai_x.value);
                } else if(unit_to.value=="ft"){
                    nilai_y.value = yrdtoft(nilai_x.value);
                } else if(unit_to.value=="inc"){
                    nilai_y.value = yrdtoinc(nilai_x.value);
                }
            } else if(unit_from.value == "ft"){
                if(metricunit.includes(unit_to.value)){
                    nilai_y.value = fttometric(nilai_x.value,unit_to.value);
                } else if(unit_to.value=="mile"){
                    nilai_y.value = fttomile(nilai_x.value);
                } else if(unit_to.value=="yrd"){
                    nilai_y.value = fttoyrd(nilai_x.value,unit_from.value);
                } else if(unit_to.value=="inc"){
                    nilai_y.value = fttoinc(nilai_x.value);
                }
            } else if(unit_from.value == "inc"){
                if(metricunit.includes(unit_to.value)){
                    nilai_y.value = inctometric(nilai_x.value,unit_to.value);
                } else if(unit_to.value=="mile"){
                    nilai_y.value = inctomile(nilai_x.value);
                } else if(unit_to.value=="yrd"){
                    nilai_y.value = inctoyrd(nilai_x.value);
                } else if(unit_to.value=="ft"){
                    nilai_y.value = inctoft(nilai_x.value);
                }
            }
        }else{
            nilai_x.classList.add("is-invalid");
            nilai_y.classList.add("is-invalid");
            nilai_y.value = "Error. Kesalahan pada Input";
        }
    } else {
        nilai_y.value = ""
        nilai_x.classList.remove("is-invalid");
        nilai_y.classList.remove("is-invalid");
    }
}

