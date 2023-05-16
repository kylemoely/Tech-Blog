const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true,
            autoIncrement: true,
            primaryKey:true
        },
        username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: true,
        modelName: 'post'
    }
)

module.exports = Post;