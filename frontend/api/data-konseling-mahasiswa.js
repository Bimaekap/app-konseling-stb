
// ! cari berdasarkan user_id user 

axios.defaults.baseURL = 'http://localhost:5500';
idAuth = "1"
axios.get(`/konseling/${idAuth}`)
.then(function(response) {
    let result = response.data
    let rows = ''
    Array.from(result).forEach(konseling => {
            // #TODO masih ada yg harus di perbaiki
            if(konseling.id == undefined){
                rows = 
                `<tr>
           
                 <td>Tidak Ada Data</td>
            </tr>
                `
            }else{
                rows += 
                `<tr>
                <td>
                    <div class="custom-checkbox custom-control">
                        <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-1">
                        <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                    </div>
                </td>
                 <td>${konseling.kategori}</td>
                 <td>${konseling.dosen_pembimbing ? konseling.dosen_pembimbing : "Belum ada data" }</td>
                 <td>${konseling.kelas}</td>
                 <td>${konseling.jadwal_satu ? konseling.jadwal_satu : "Jadwal Belum Di Buat"} & ${konseling.lokasi_satu ? konseling.lokasi_satu : "Lokasi Belum Di Buat"}</td>
                 <td>${konseling.jadwal_dua ? konseling.jadwal_dua : "Jadwal Belum Di Buat"} & ${konseling.lokasi_dua ? konseling.lokasi_dua : "Lokasi Belum Di Buat"}</td>
                 <td><div class="badge badge-danger">Belum</div></td>
                 <td><div class="badge badge-success">On Progress</div></td>
                 <td><button onclick="buttonPilihJadwal(${konseling.id})" class="btn btn-primary">Pilih Jadwal</button></td>
            </tr>
                `
            }
            
        })
        document.getElementById('table-konseling-mahasiswa').innerHTML = rows
    })
.catch(err => console.log(err))

async function buttonPilihJadwal(id) {
    location.assign('../mahasiswa/jadwal-konseling-mahasiswa.html')
}