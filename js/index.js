function hitungLuas() {
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.remove("hidden")

    var input = document.getElementById("input-sisi")
    var sisi = input.value
    var luas = sisi*sisi
    
    var nilaiSisiPersegi = document.getElementById("nilai-sisi")
    nilaiSisiPersegi.innerText = `${sisi} x ${sisi}`

    var hasilLuas = document.getElementById("hasil-luas")
    hasilLuas.innerText = luas
}

function resetLuas() {
    var divPenyelesaian = document.getElementById("penyelesaian")
    divPenyelesaian.classList.add("hidden")

    var input = document.getElementById("input-sisi")
    input.value = ""
}

const hitungKeliling = () => {
    const divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.remove("hidden")

   const input = document.getElementById("input-sisi-keliling")
   const sisi = input.value
   const keliling = 4*sisi

   const nilaiSisiKeliling = document.getElementById("sisi-keliling")
   nilaiSisiKeliling.innerText = `4 x ${sisi}`

   const hasilKeliling = document.getElementById("hasil-keliling")
   hasilKeliling.innerText = keliling

}

const resetKeliling = () => {
    const divPenyelesaianKeliling = document.getElementById("penyelesaian-keliling")
    divPenyelesaianKeliling.classList.add("hidden")
    
    const input = document.getElementById("input-sisi-keliling")
    input.value = ""
}