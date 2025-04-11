
let textInput = document.getElementById('nomor_hp')
let msg = document.getElementById('msg')

let formValidation = () => {
    if(textInput === ""){
        console.log(textInput)
        msg.innerHTML = 'tidak boleh kosong'
    }else{
        console.log('berhasil')
        msg.innerHTML = ""
    }
}
document.getElementById("form-mahasiswa-konseling").addEventListener("submit",
    async function(event) {
        event.preventDefault()
        formValidation();
        const nama = document.getElementById("nama").value
        const nim = document.getElementById("nim").value
        const kelas = document.getElementById("kelas").value
        const prodi = document.getElementById("prodi").value
        const nomor_hp = document.getElementById("nomor_hp").value
        const email = document.getElementById("email").value
        const kategori = document.getElementById("kategori").value
        const status = 0

        const konselingData = {
            nama:nama,
            nim:nim,
            kelas:kelas,
            prodi:prodi,
            nomor_hp:nomor_hp,
            email:email,
            kategori:kategori,
            status: status
        }

        await axios.post('http://localhost:5500/konseling', konselingData)
        .then((res) => {
            console.log(res.data)
            alert('data berhasil di simpan')
        }).catch((error) => {
            console.log(error)
        })
})

