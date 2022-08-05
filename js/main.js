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

let btn_menu_prev
let btn_from_prev
let btn_to_prev

function prep_mode(jenis){
    if (jenis=="panjang"){
        input.jenis = "panjang";
        document.getElementById("jenis").value = "panjang"
        document.getElementById("nilai_x").value = "";
        document.getElementById("nilai_y").value = "";
        document.getElementById("unit_from").value = "km";
        document.getElementById("unit_to").value = "km";

        btn_menu_prev = "menu_btn_panjang";
        btn_from_prev = "btn_from_km";
        btn_to_prev = "btn_to_km";

        document.getElementById(btn_menu_prev).classList.add("active");
        document.getElementById(btn_from_prev).classList.add("active");
        document.getElementById(btn_to_prev).classList.add("active");

    } else if (jenis=="suhu"){
        input.jenis = "suhu";
        document.getElementById("jenis").value = "suhu"
        document.getElementById("nilai_x").value = "";
        document.getElementById("nilai_y").value = "";
        document.getElementById("unit_from").value = "c";
        document.getElementById("unit_to").value = "c";

        btn_menu_prev = "menu_btn_suhu";
        btn_from_prev = "btn_from_c";
        btn_to_prev = "btn_to_c";

        document.getElementById(btn_menu_prev).classList.add("active");
        document.getElementById(btn_from_prev).classList.add("active");
        document.getElementById(btn_to_prev).classList.add("active");
    }

    const jenis_list = ['panjang','suhu'];

    jenis_list.forEach(e => {
        if (jenis != e){
            element = document.getElementsByName(e + "_btn");
            element.forEach(button => {
                button.classList.add("d-none");
            });
        } else {
            element = document.getElementsByName(e + "_btn");
            element.forEach(button => {
                button.classList.remove("d-none");
            });
        }
    });
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




