
// axios.defaults.baseURL = 'http://localhost:5500';
axios.defaults.baseURL = 'https://3d48-202-162-199-56.ngrok-free.app';

document.querySelectorAll(".btn-pilih-jadwal").forEach(d => {
    d.addEventListener('click', async function (event) {
        event.preventDefault()
        let jadwalPilihan = document.getElementById("jadwal-select").value
        const idKonseling = localStorage.getItem('ID_KONSELING')
        let dataJadwalPilihan = ''
        if(jadwalPilihan == 'Jadwal Satu'){
            dataJadwalPilihan = {
                nama_mahasiswa : localStorage.getItem("NAMA_MAHASISWA"),
                pengajuan_konseling_id : localStorage.getItem("ID_KONSELING"),
                jadwal_pilihan : localStorage.getItem("JADWAL_SATU"),
                lokasi_pilihan : localStorage.getItem("LOKASI_DUA")
            }
        }else if (jadwalPilihan == 'Jadwal Dua') {
            dataJadwalPilihan = {
                nama_mahasiswa : localStorage.getItem("NAMA_MAHASISWA"),
                pengajuan_konseling_id : localStorage.getItem("ID_KONSELING"),
                jadwal_pilihan : localStorage.getItem("JADWAL_DUA"),
                lokasi_pilihan : localStorage.getItem("LOKASI_DUA")
            }
        }
        try{
            console.log(dataJadwalPilihan)
            console.log("running post")
            await axios.post(`/konseling/jadwal-pilihan/create`,dataJadwalPilihan)
            .then(response => {
                return response.status(200).send('data berhasil di create')
            })
            .catch(response => {
                return response.status(400).send("Bad Request")
            })

        }catch(e){
            console.log('Error fetching user:', e);
            if (e.postApi && e.postApi.status === 404) {
                console.log('User tidak ditemukan');
            }
            return null;
        }
        })
    }
)

