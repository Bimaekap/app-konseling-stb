// axios.defaults.baseURL = '';
let textInput = document.getElementById('nomor_hp')
let msg = document.getElementById('msg')
document.getElementById("user-profile-name").innerHTML = localStorage.getItem("NAMA_AUTH")

let formValidation = () => {
    if(textInput === ""){
        msg.innerHTML = 'tidak boleh kosong'
    }else{
        console.log("berhasil")
        msg.innerHTML = ""
    }
}
document.getElementById("form-mahasiswa-konseling").addEventListener("submit",
    async function(event) {
        event.preventDefault()
        formValidation();
        const user_id = localStorage.getItem('ID_AUTH')
        const nama = document.getElementById("nama").value
        const nim = document.getElementById("nim").value
        const kelas = document.getElementById("kelas").value
        const prodi = document.getElementById("prodi").value
        const nomor_hp = document.getElementById("nomor_hp").value
        const email = document.getElementById("email").value
        const kategori = document.getElementById("kategori").value
        const status = 0

        const konselingData = {
            user_id:user_id,
            nama:nama,
            nim:nim,
            kelas:kelas,
            prodi:prodi,
            nomor_hp:nomor_hp,
            email:email,
            kategori:kategori,
            status: status
        }
        await axios.post('http://localhost:5500/konseling',konselingData)
        .then(res => {
            console.log(res)
            console.log(res.data)
            res.status(200).json(res.data)
        })
        .catch(function (error) {
            if(error.response){
                console.log(error)
            }else if(error.request){
                console.log(error.request)
            }
       
        })
})

