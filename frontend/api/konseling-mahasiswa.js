// #NOTE Menu Ambil Data Konseling By Id Mahasiswa

axios.defaults.baseURL = 'http://localhost:5500';

document.getElementById("user-profile-name").innerHTML = localStorage.getItem("NAMA_AUTH")

document.getElementById("btn-lanjutkan-konselor").addEventListener("click",
    async function (event) {
        event.preventDefault()
        // console.log('lanjut-konselor')
        // halaman menu dibawah digunakan untuk mengirim ke menu html lanjutkan konselor
        location.assign('../admin/lanjutan-konseling.html')
    }
)
idAuth = localStorage.getItem('ID')
axios.get(`/konseling/${idAuth}`)
.then(function(response) {
    let result = response.data
    let rows = ''
    Array.from(result).forEach(konseling => {
        rows += `<tr>
                    <td>
                        <div class="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-1">
                            <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                        </div>
                    </td>
                     <td>${konseling.kategori}</td>
                
                     <td><div class="badge badge-danger">Belum</div></td>
                     <td><button onclick="tampilkanDetail(${konseling.id})" class="btn btn-primary">Approve</button></td>
                </tr>
                    `
    })
    document.getElementById('table-konseling-mahasiswa').innerHTML = rows
})