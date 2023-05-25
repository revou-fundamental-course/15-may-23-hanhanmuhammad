
function hitungLuas() {
    // menampilkan output hasil luas
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.remove("hidden")

    // mengambil nilai input dan menghitung luas
    var input = document.getElementById("input-sisi")
    var sisi = input.value
    var luas = sisi*sisi
    
    // menampilkan cara perhitungan
    var nilaiSisiPersegi = document.getElementById("nilai-sisi")
    nilaiSisiPersegi.innerText = `${sisi} x ${sisi}`

    // menampilkan hasil luas
    var hasilLuas = document.getElementById("hasil-luas")
    hasilLuas.innerText = luas
}

function resetLuas() {
    // menyembunyikan output hasil
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.add("hidden")

    // mengonsongkan nilai input luas
    var input = document.getElementById("input-sisi")
    input.value = ""
}
    
const hitungKeliling = () => {
    // menampilkan output hasil keliling
    const divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.remove("hidden")
 
    // mengambil nilai input dan menghitung keliling
   const input = document.getElementById("input-sisi-keliling")
   const sisi = input.value
   const keliling = 4*sisi

    // menampilkan cara perhitungan
   const nilaiSisiKeliling = document.getElementById("sisi-keliling")
   nilaiSisiKeliling.innerText = `4 x ${sisi}`

   // menampilkan hasil keliling
   const hasilKeliling = document.getElementById("hasil-keliling")
   hasilKeliling.innerText = keliling

}

const resetKeliling = () => {
    // menyembunyikan output hasil perhitungan
    const divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.add("hidden")
    
    // mengonsongkan nilai input keliling
    const input = document.getElementById("input-sisi-keliling")
    input.value = ""
}