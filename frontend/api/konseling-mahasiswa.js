// #NOTE Menu Ambil Data Konseling By Id Mahasiswa

document.getElementById("user-profile-name").innerHTML = localStorage.getItem("NAMA_AUTH")

document.getElementById("btn-lanjutkan-konselor").addEventListener("click",
    async function (event) {
        event.preventDefault()
        console.log('lanjut-konselor')
        location.assign('../admin/lanjutan-konseling.html')
    }
)

