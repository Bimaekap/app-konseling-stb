// src/routes/konseling.js

import express from "express"
const router = express.Router();
import Konseling from "../models/konseling.js"
import ProsesKonseling from "../models/proses-konseling.js"
import DataKonselingDosen from "../models/data_konseling_dosen.js"
import path from "path";
const __dirname = path.resolve()

let adminPath = path.join(__dirname,'frontend','admin')


router.get('/index', async(req,res) => {
  location.assign('../authentication/login.html')
})

// Route Post/Simpan Konseling Untuk Mahasiswa
router.post('/', async (req, res) => {
  try {
    const konselingCreate = await Konseling.create(req.body);
    // res.status(201).send('created')
    res.status(201).json(konselingCreate);
  } catch (error) {
    res.status(400).json("Error")
    // res.status(500).send('Gagal buat laporan konseling');
  }
});

// Get all konseling
router.get('/', async (req, res) => {
  try {
    const konselingData = await Konseling.findAll();
    const totalKonseling = await Konseling.count();
    res.status(200).json({konselingData,totalKonseling});
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data konseling.' });
  }
});

// Ambil Data Konseling Berdasarkan ID mahasiswa
router.get('/:user_id', async (req, res) => {
  try {
    const konselingByIdUser = await Konseling.findAll(
      {where:{
      user_id:req.params.user_id}
    })
    .then(data =>{ 
    if (!data) {
      res.status(404).json({ message: 'Konseling not found.' });
    } else {
      // array does not exist or is empty
      if (data === undefined || data.length == 0) {
        res.status(201).send('tidak ada data')
        return
      }else{
      res.status(200).json(data)
      console.log(data)
    }
    
    }
  
    }
  )
    .catch(err => console.log(err))
    

  
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch konseling by id user login' });
  }
});
 
// Ambil Data Konseling Berdasarkan parameter
router.get('/edit/:id', async (req, res) => {
  try {
    const konselingByIdUser = await Konseling.findAll(
      {where:{
      id:req.params.id}
    })
    .then(data =>{ 
    if (!data) {
      
      res.status(404).json({ message: 'Konseling not found.' });
    } else {
      // array does not exist or is empty
      if (data === undefined || data.length == 0) {
        res.status(201).send('tidak ada data')
        return
      }else{
      res.json(
        Array.from(data).forEach(dataKonseling => {
          res.send(dataKonseling)    
        })
      )
    }
    
    }
  
    }
  )
    .catch(err => console.log(err))
    

  
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch konseling by id user login' });
  }
});
 
// #NOTE Hapus data konseling berdasarkan id disini
router.delete('/delete/:id', async (req, res) => {

  try {
    const konselingDelete = await Konseling.destroy({where:{id:req.params.id} });
    res.status(201).json({message : 'Data Berhasil Di Hapus'});
  } catch (error) {
    console.log(req.params.id)
    res.status(500).json({ message: 'Tidak Dapat Menghapus File' });
  }
});

router.post('/set-waktu/:id',async (req,res) => {
  const updatedData = {
  jadwalSatu: req.body.jadwalSatu,
  lokasiSatu: req.body.lokasiSatu,
  jadwalDua: req.body.jadwalSatu,
  lokasiDua: req.body.lokasiDua,
  };
  try {
    await Konseling.update(
    {
      jadwal_satu:updatedData.jadwalSatu,
      lokasi_satu:updatedData.lokasiSatu,
      jadwal_dua:updatedData.jadwalDua,
      lokasi_dua:updatedData.lokasiDua,
      status:1,
    },  {
     where:{id:req.params.id} 
    })
    .then(function (konseling) {
      res.status(200).json("Berhasil Update")
    })
    .catch(err => console.log(err))
  }catch(error){
    res.status().json("Data Tidak Ditemukan")
  }
})

// Route pilih jadwal
router.get('/pilih-jadwal/:id', async (req,res) => {
  const id = req.params.id
  try {
      await Konseling.findByPk(id)
      .then(function(data) {
        res.status(200).json(data)
      })
      .catch(error => {
          console.log(error)
      })
  }catch(e) {

  }
})

// ! Router update pilihan jadwal untuk mahasiswa
router.post('/jadwal-pilihan/create', async (req,res) => {
  let data = req.body
  try{
    const jadwalPilihan = await ProsesKonseling.create(data)
    return res.status(201).json(jadwalPilihan)
  }catch(e) {
    res.status(400).json(e)
  }
})

// Update siapa konselor nya
router.post('/update/konselor/:id', async (req,res) => {
  //! ambil data dari req.body
  try {
    const updateKonselor = await Konseling.update({
      konselor : "telor",
    },{
      where:{id: req.params.id}
    })
    .then(function(konseling){
      res.status(201).json(konseling)
    })
    .catch(err => console.log(err))

  }catch(err) {
    console.log(err)
  }
} )


export default router;

