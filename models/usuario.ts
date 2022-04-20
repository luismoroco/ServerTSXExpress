import {DataTypes} from 'sequelize';
import db from '../db/connection';

const User = db.define('User', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});

export default User;