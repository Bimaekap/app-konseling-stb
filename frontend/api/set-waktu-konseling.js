// axios.defaults.baseURL = 'http://localhost:5500/konseling/';
axios.defaults.baseURL = 'https://3d48-202-162-199-56.ngrok-free.app/konseling/';


document.getElementById("toastr-admin-set-waktu").addEventListener("click",
    async function (event) {
        event.preventDefault()
        const idKonseling = localStorage.getItem("ID")
        let jadwalSatu = document.getElementById("jadwal-satu").value
        let jadwalDua = document.getElementById("jadwal-dua").value
        let lokasiSatu = document.getElementById("lokasi-satu").value
        let lokasiDua = document.getElementById("lokasi-dua").value
        // #TODO: Buat atur lokasi untuk melakukan konseling
        const inputDataWaktu = {
            jadwalSatu : jadwalSatu,
            jadwalDua : jadwalDua,
            lokasiSatu : lokasiSatu,
            lokasiDua : lokasiDua
        }
        console.log(inputDataWaktu)
        try {
            await axios.post(`/set-waktu/${idKonseling}`, inputDataWaktu)
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
          
        }catch(err){
            console.log(err)
        }
    }
)

