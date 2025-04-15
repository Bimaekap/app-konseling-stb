
// ! cari berdasarkan user_id user 
idAuth = localStorage.getItem('ID_AUTH')
console.log(idAuth)
axios.get(`http://localhost:5500/konseling/${idAuth}`)
.then(function(response) {
    console.log(response.data)
    let result = response.data
    let rows = ''
    Array.from(result).forEach(konseling => {
            // #TODO masih ada yg harus di perbaiki
           
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
                 <td><button onclick="tampilkanDetail(${konseling.id})" class="btn btn-primary">Pilih Jadwal</button></td>
    
            </tr>
                `
                
            
            
            // document.getElementById('table-konseling-mahasiswa').innerHTML = rows
            
        })
        document.getElementById('table-konseling-mahasiswa').innerHTML = rows
    })
.catch(err => console.log(err))