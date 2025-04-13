const nama="rian akbar";
let usia =16;

const biodata= document.getElementById('biodata');
console.log('biodata')

function generatebiodata() {
    let generasi;

    if(usia > 15 && usia < 16 ) {
        generasi = 'generasi remaja';
    }
    else if(usia > 16 && usia < 17 ) {
        generasi = 'generasi remaja';
    }
    else if(usia > 17 && usia < 18 ) {
        generasi = 'generasi remaja';
    }
    else if(usia > 19 && usia < 20 ) {
        generasi = 'generasi remaja';
    }
    else {
        generasi = 'generasi remaja';
    }
return console.log("selamat datag di web The Tecno");
}
console.log(nama);
console.log(usia);
generatebiodata();