import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const ProsesKonseling = sequelize.define('proses_konselings', {
  pengajuan_konseling_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nama_mahasiswa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jadwal_pilihan: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lokasi_pilihan:{
    type: Sequelize.STRING,
    allowNull: false
  },
  
},
{
  timestamps:true
});

export default ProsesKonseling