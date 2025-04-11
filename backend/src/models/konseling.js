import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const Konseling = sequelize.define('pengajuan_konselings', {
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nim: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  kelas:{
    type: Sequelize.STRING,
    allowNull: false
  },
  prodi:{
    type:Sequelize.STRING,
    allowNull:false
  },
  nomor_hp:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false
  },
  konselor: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dosen_pembimbing:{
    type: Sequelize.STRING,
    allowNull:true
  },
  kategori: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull:false,
  }
});

export default Konseling