axios.defaults.baseURL = 'http://localhost:5500/konseling/';


document.getElementById("btn-submit").addEventListener("submit",
    async function (event) {

        event.preventDefault()
        const idKonseling = localStorage.getItem("ID")
        let jadwalSatu = document.getElementById("jadwal-satu").value
        let jadwalDua = document.getElementById("jadwal-dua").value

        const inputDataWaktu = {
            jadwalSatu : "jadwalSatu",
            jadwalDua : "jadwalDua"
        }
    await axios.post(`/set-waktu/${idKonseling}`, inputDataWaktu)
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
    }
)