import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const Konseling = sequelize.define('pengajuan_konselings', {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
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
  
},
{
  timestamps:true
});

export default Konseling