let input = {
    jenis : "",
    nilai : "",
    unit_from : "",
    unit_to : "",
};

window.addEventListener("load", function() {
    input.jenis = "panjang";
    prep_mode(input.jenis);
    
    document.getElementById("nilai_x").addEventListener('input', convert);
    
});

function createbutton(jenis, units){
    let btnlistfrom_container = document.getElementById("btn_list_from");
    let btnlistto_container = document.getElementById("btn_list_to");
    
    while (btnlistfrom_container.firstChild) {
        btnlistfrom_container.removeChild(btnlistfrom_container.firstChild);
        btnlistto_container.removeChild(btnlistto_container.firstChild)
    }
    units.forEach(unit => {

        // create button unit input
        let buttonfrom_container = document.createElement('div');
        buttonfrom_container.className = "col-6 mb-3";
        buttonfrom_container.tagName = jenis+"_btn";

        let button_from = document.createElement('button');
        button_from.type = "button";
        button_from.className = "btn btn-outline-secondary w-100";
        button_from.id = "btn_from_"+unit[0];
        button_from.onclick = function () {
            setUnitForm(unit[0],button_from.id);
        };
        button_from.textContent = unit[1];

        buttonfrom_container.appendChild(button_from);
        btnlistfrom_container.appendChild(buttonfrom_container);

        // create button unit output
        let buttonto_container = document.createElement('div');
        buttonto_container.className = "col-6 mb-3";
        buttonto_container.tagName = jenis+"_btn";

        let button_to = document.createElement('button');
        button_to.type = "button";
        button_to.className = "btn btn-outline-secondary w-100";
        button_to.id = "btn_to_"+unit[0];
        button_to.onclick = function () {
            setUnitTo(unit[0],button_to.id);
        };
        button_to.textContent = unit[1];

        buttonto_container.appendChild(button_to);
        btnlistto_container.appendChild(buttonto_container);
    });
}

let btn_menu_prev
let btn_from_prev
let btn_to_prev

function prep_mode(jenis){
    if (jenis=="panjang"){
        input.jenis = "panjang";

        let panjang_units = [
            ["km", "Kilometer"], 
            ["hm", "Hektometer"],
            ["dam", "Dekameter"],
            ["m", "Meter"],
            ["dm", "Desimeter"],
            ["cm", "Centimeter"],
            ["mm", "Milimeter"],
            ["mile", "Mile"],
            ["yrd", "Yard"],
            ["ft", "Foot"],
            ["inc", "Inch"]
        ]

        document.getElementById("judul").innerHTML = "Panjang";
        document.getElementById("jenis").value = "panjang"
        document.getElementById("nilai_x").value = "";
        document.getElementById("nilai_y").value = "";
        document.getElementById("unit_from").value = "km";
        document.getElementById("unit_to").value = "km";

        createbutton(jenis, panjang_units);

        btn_menu_prev = "menu_btn_panjang";
        btn_from_prev = "btn_from_km";
        btn_to_prev = "btn_to_km";

        document.getElementById(btn_menu_prev).classList.add("active");
        document.getElementById(btn_from_prev).classList.add("active");
        document.getElementById(btn_to_prev).classList.add("active");

    } else if (jenis=="suhu"){
        input.jenis = "suhu";

        let suhu_units = [
            ["c", "Celsius"], 
            ["k", "Kelvin"],
            ["f", "Fahrenheit"]
        ]

        document.getElementById("judul").innerHTML = "Suhu";
        document.getElementById("jenis").value = "suhu"
        document.getElementById("nilai_x").value = "";
        document.getElementById("nilai_y").value = "";
        document.getElementById("unit_from").value = "c";
        document.getElementById("unit_to").value = "c";

        createbutton(jenis, suhu_units);

        btn_menu_prev = "menu_btn_suhu";
        btn_from_prev = "btn_from_c";
        btn_to_prev = "btn_to_c";

        document.getElementById(btn_menu_prev).classList.add("active");
        document.getElementById(btn_from_prev).classList.add("active");
        document.getElementById(btn_to_prev).classList.add("active");
    }
}

function setMode(jenis){
    document.getElementById(btn_menu_prev).classList.remove("active");
    btn_menu_prev = "menu_btn_"+jenis;
    prep_mode(jenis)
}

function setUnitForm(x,y){
    document.getElementById(btn_from_prev).classList.remove("active");
    btn_from_prev = y;
    document.getElementById(y).classList.add("active");
    document.getElementById("unit_from").value = x;
    convert()
}

function setUnitTo(x,y){
    document.getElementById(btn_to_prev).classList.remove("active");
    btn_to_prev = y;
    document.getElementById(y).classList.add("active");
    document.getElementById("unit_to").value = x;
    convert()
}

function validate(x){
    let re = /^[-+]?[0-9]*\.?[0-9]+$/;

    return (re.test(x));
}

function convert(){
    const nilaiin_holder = document.getElementById("nilai_x");
    const nilaiout_holder = document.getElementById("nilai_y");

    input.nilai = document.getElementById("nilai_x").value;

    if(input.nilai != "" ){
        if(validate(input.nilai)){
            nilaiin_holder.classList.remove("is-invalid");
            nilaiout_holder.classList.remove("is-invalid");

            input.unit_from = document.getElementById("unit_from").value;
            input.unit_to = document.getElementById("unit_to").value;

            if (input.unit_from == input.unit_to) {
                nilaiout_holder.value = input.nilai
            } else {
                if (input.jenis == "panjang") {
                    nilaiout_holder.value = convert_panjang(input.nilai, input.unit_from, input.unit_to);
                } else {
                    nilaiout_holder.value = "Jenis Not Defined!"
                }
            }
        } else {
            nilaiin_holder.classList.add("is-invalid");
            nilaiout_holder.classList.add("is-invalid");
            nilaiout_holder.value = "Error. Kesalahan pada Input";
        }
    }else{
        nilaiin_holder.classList.remove("is-invalid");
        nilaiout_holder.value = "";
        nilaiout_holder.classList.remove("is-invalid");
    }
}




