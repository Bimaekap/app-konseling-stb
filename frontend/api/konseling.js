// #NOTE Menu Ambil Semua Data Konseling Oleh Konselor
// const getBtn = document.getElementById("get-data")
axios.defaults.baseURL = 'http://localhost:5500';
// ! GET
axios.get('/konseling')
  .then(function (response) {
    // handle success
    let result = response.data
    let rows = ''
    Array.from(result).forEach(user => {
        rows += `<tr>
                    <td>
                        <div class="custom-checkbox custom-control">
                            <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-1">
                            <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                        </div>
                    </td>
                     <td>${user.nama}</td>
                     <td>${user.nim}</td>
                     <td>${user.kelas}</td>
                     <td>${user.prodi}</td>
                     <td>${user.nomor_hp}</td>
                     <td>${user.email}</td>
                     <td>${user.konselor}</td>
                     <td>${user.dosen_pembimbing}</td>
                     <td>${user.kategori}</td>
                     <td><div class="badge badge-danger">Belum</div></td>
                     <td><button onclick="tampilkanDetail(${user.id})" class="btn btn-primary">Approve</button></td>
                </tr>
                    `
    })
    document.getElementById('table-konseling').innerHTML = rows
})
.catch(err => console.log(err.response.data))
 
// #NOTE Nama User Profile
document.getElementById("user-profile-name").innerHTML = localStorage.getItem("NAMA_AUTH")
// ! GET
// document.getElementById("btn-approve").addEventListener("submit",
//     async function(event) {
//         event.preventDefault()
//         const idItem = tampilkanDetail(id)
//         await axios.get(`konseling/:${idItem}`)
//         .then(response => {
//             console.log('ok')
//         })
//     }
// )

// ! Post pengajuan konseling mahasiswa
 async function tampilkanDetail(id) {
  try {
    await axios.get(`/konseling/${id}`)
    .then(data => {
      // #TODO : simpan data table row pengajuan_konseling pada localStorage js
      localStorage.setItem('ID',data.data[0].id)
      localStorage.setItem('NAMA_MAHASISWA',data.data[0].nama)
      localStorage.setItem('NIM',data.data[0].nim)
      localStorage.setItem('EMAIL',data.data[0].email)
      localStorage.setItem('KATEGORI',data.data[0].kategori)
      localStorage.setItem('KELAS',data.data[0].kelas)
      localStorage.setItem('NOMOR_HP',data.data[0].nomor_hp)
      localStorage.setItem('PRODI',data.data[0].prodi)
      localStorage.setItem('DOSEN_PEMBIMBING',data.data[0].dosen_pembimbing)
      // [] arahkan ke page untuk detail pengajuan
      location.assign('../admin/detail-pengajuan.html')
      console.log(data)
    })
  }catch(err){
    console.log(err)
  }
    
}

async function editKonselingById(url){
   await axios.get(url)
} 
// document.getElementById('btn-approve').addEventListener("load", (e) => {
//     e.preventDefault()
//     window.location = "detail-pengajuan.html";  
// })

// #TODO submit konseling untuk mahasiswa
/** 
 * [] input nama otomatis
 * [] input nim
 * [] input kategori
 * [] input dosen pembimbing
 * [] input konselor random
 * **/ 

// async function getData () {
//     try {
//         axios.get("/konseling")
//         .then(function(res){
//             console.log(res.data)
//         })
//         .catch(function(error){
//             console.log(error)
//         })
//     }catch(error){
//         console.log(error)
//     }
// }


// const getData = () => {
//     fetch(endpoint)
//     .then((data) => data.json(data))
//     .then((result) => console.log(result))
// }

// getBtn.addEventListener('click',getData);

