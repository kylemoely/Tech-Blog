const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric:true,
                len: [5,16],
            }
        },
        password: {
            type:DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[6,20],
            }
        }
    }
);

module.exports = User;