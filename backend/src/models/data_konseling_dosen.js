import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const DataKonselingDosen = sequelize.define('data_konseling_dosen', {
  konseling_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nama_mahasiswa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  kategori: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  jadwal_konseling: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lokasi_konseling:{
    type: Sequelize.STRING,
    allowNull: false
  },
},
{
  timestamps:true
});

export default DataKonselingDosen