// #NOTE Menu Ambil Semua Data Konseling Oleh Konselor
// const getBtn = document.getElementById("get-data")
// axios.defaults.baseURL = 'http://localhost:5500';


axios.defaults.baseURL = 'https://3d48-202-162-199-56.ngrok-free.app';
// ! GET
axios.get('/konseling')
  .then(function (response) {
    // handle success
    let result = response.data.konselingData
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
                     <td>Belum Ada Data</td>
                     <td>${user.konselor}</td>
                     <td>${user.kategori}</td>
                     <td>${
                      (() => {
                        if (user.status == '0') {
                        return `<div class="badge badge-danger">
                        Belum Di Approve
                        </div>`
                        }else if (user.status =='1'){
                          return `<div class="badge badge-success">
                       Jadwal Sudah Di Atur
                          </div>`
                        };
                      })()
                    }</td>
                     <td><button onclick="tampilkanDetail(${user.id})" class="btn btn-primary">Approve</button></td>
                </tr>
                    `
    })
    document.getElementById('total-konseling').innerHTML = response.data.totalKonseling
    document.getElementById('badge-all').innerHTML = response.data.totalKonseling
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
  const user_id = localStorage.getItem('ID_AUTH')
  
  try {
    await axios.get(`/konseling/edit/${id}`)
    .then(async data =>  {
      // #TODO : simpan data table row pengajuan_konseling pada localStorage js
      localStorage.setItem('ID',data.data.id)
      localStorage.setItem('USER_ID', user_id)
      localStorage.setItem('NAMA_MAHASISWA',data.data.nama)
      localStorage.setItem('NIM',data.data.nim)
      localStorage.setItem('EMAIL',data.data.email)
      localStorage.setItem('KATEGORI',data.data.kategori)
      localStorage.setItem('KELAS',data.data.kelas)
      localStorage.setItem('NOMOR_HP',data.data.nomor_hp)
      localStorage.setItem('PRODI',data.data.prodi)
      localStorage.setItem('DOSEN_PEMBIMBING',data.data.dosen_pembimbing)
      // [] arahkan ke page untuk detail pengajuan
      // console.log(data)
      // ! UPDATE DATA DISINI
     let nama_konselor = localStorage.getItem("NAMA_AUTH");

    const authData = {
      konselor : "telor"
    }
    await axios.post(`/konseling/update/konselor/${id}`, authData)

      console.log(authData)
      console.log("program jalan")

      location.assign('../admin/detail-pengajuan.html')
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

