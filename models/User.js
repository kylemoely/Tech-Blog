const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            autoIncrement:true,
            primaryKey: true
        },
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
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            }
        },
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:false,
        modelName: 'user'
    }
);

module.exports = User;