// src/routes/konseling.js

import express from "express"
const router = express.Router();
import Konseling from "../models/konseling.js"
import path from "path";
const __dirname = path.resolve()

let adminPath = path.join(__dirname,'frontend','admin')


// Route Post/Simpan Konseling Untuk Mahasiswa
router.post('/', async (req, res) => {
  try {
    const konselingCreate = await Konseling.create(req.body);
    console.log(req.body)
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
    res.json(konselingData);
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
router.post('/pilih-jadwal/:id', async (req,res) => {

})
export default router;

