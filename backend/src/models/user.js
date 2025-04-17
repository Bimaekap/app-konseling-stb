import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const Users = sequelize.define('users',{
  nama: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nim:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true,
    validate:{
        isEmail:true
    }
  },
  role:{
    type:Sequelize.STRING,
    allowNull:true
  }
}, 
  {
    tableName:'users',
    timestamps:false // enables timestamps);
  });

export default Users