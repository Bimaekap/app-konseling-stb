axios.defaults.baseURL = 'http://localhost:5500';

document.getElementById("form-login").addEventListener("submit",
 async function(event) {
        event.preventDefault()

        const nama = document.getElementById("username").value;
        const password = document.getElementById("password").value;
       
        const userData = {
          nama:nama,
          password:password
        }
        try {
          await axios.post('/login/auth', userData)
          .then(data =>{
            localStorage.setItem('ID_AUTH', data.data.id)
            localStorage.setItem('NAMA_AUTH', nama)
            // localStorage.setItem('ROLE_AUTH', data.data.role)
            localStorage.setItem('EMAIL_AUTH', data.data.email)
            localStorage.setItem('NIM_AUTH', data.data.nim)
            let role = data.data.role
            // cek siapa yang login
            if(role === 'konselor'){
              console.log('konselor')
              location.assign('../admin/index.html')
            }else if(role === 'mahasiswa'){
              console.log('mahasiswa')
              location.assign('../mahasiswa/index.html')
            }else{
              console.log('dosen')
              location.assign('../dosen/index.html')
            }
            })
            .catch(err => console.log(err))
        }catch(err){
          console.log('tidak ada data')
          console.log(err)
        }
})

