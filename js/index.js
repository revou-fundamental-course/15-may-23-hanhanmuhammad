
function hitungLuas() {
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.remove("hidden")

    var input = document.getElementById("sisi-luas")
    var sisi = input.value
    var luas = sisi*sisi
    
    var nilaiSisiPersegi = document.getElementById("nilai-sisi-luas")
    nilaiSisiPersegi.innerText = `${sisi} x ${sisi}`

    var hasilLuas = document.getElementById("output_luas")
    hasilLuas.innerText = luas
}

function resetLuas() {
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.add("hidden")

    var input = document.getElementById("sisi-luas")
    input.value = ""
}
    
let hitungKeliling = () => {
    let divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.remove("hidden")
 
   let input = document.getElementById("sisi-keliling")
   let sisi = input.value
   let keliling = 4*sisi

   let nilaiSisiKeliling = document.getElementById("nilai-sisi-keliling")
   nilaiSisiKeliling.innerText = `4 x ${sisi}`

   let hasilKeliling = document.getElementById("output_keliling")
   hasilKeliling.innerText = keliling

}

let resetKeliling = () => {
    let divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.add("hidden")
    
    let input = document.getElementById("sisi-keliling")
    input.value = ""
}