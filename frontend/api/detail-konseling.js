
// get data from localStorage
// axios.defaults.baseURL = 'http://localhost:5500/konseling/';
axios.defaults.baseURL = 'https://3d48-202-162-199-56.ngrok-free.app/konseling/';

document.getElementById("user-profile-name").innerHTML = localStorage.getItem("NAMA_AUTH")
document.getElementById("nama-dosen").innerHTML = "Belum Terdata";
// variable nama dosen
// variable nama prodi
document.getElementById("nama-prodi").innerHTML = localStorage.getItem("PRODI")
// variable nama mahasiswa
document.getElementById("nama-mahasiswa").innerHTML = localStorage.getItem("NAMA_MAHASISWA")
document.getElementById("kategori").innerHTML = localStorage.getItem("KATEGORI")

// cancel-konselor

document.getElementById("cancel-konselor").addEventListener("click",
    async function (e) {
        e.preventDefault()
        const idKonseling = localStorage.getItem("ID")
        try {
            await axios.delete(`/delete/${idKonseling}`)
            .then(data => console.log(data))
            /**
             * #TODO
             * [] buat redirect back ke halaman sebelumnya
             */
        
            window.history.back()
        }catch(err){
            console.log(err)
        }
        /** 
         * #TODO 
         * [] query data berdasarkan id tabel pengajuan_konselings
         * [] arahkan page ke halaman sebelumnya ketika berhasil di query
            
        */ 
        
    }
)
