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
    res.send(401).send('created')
    res.json(konselingCreate);
  } catch (error) {
    res.status(500).json({ message: 'Gagal buat laporan konseling.' });
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
router.get('/:id', async (req, res) => {
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
        res.status(200).json('tidak ada data')
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
  const id = req.params.id
  const updatedData = {
  jadwalSatu: req.body.jadwalSatu,
  jadwalDua: req.body.jadwalSatu
  };

  try {
    const setWaktu = await Konseling.findByPk(id)
    .then(konseling => {
      if(konseling !== null){
        // res.json(konseling)
        konseling.jadwalSatu = updatedData.jadwalSatu
        konseling.jadwalDua = updatedData.jadwalDua
        return konseling.save()        
      }else{

        res.json("data tidak ada")
      }

    })
    .catch(err => console.log(err))
  }catch(error){
    res.status().json("Data Tidak Ditemukan")
  }
})
export default router;

