const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50] // Longitud mínima y máxima
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true // Validación de correo electrónico
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100] // Contraseña mínima de 8 caracteres
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true, // Permitir que sea opcional
      validate: {
        isUrl: true // Validar que sea una URL válida
      }
    },
    bio: {
      type: DataTypes.TEXT, // Campo de texto largo
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY, // Fecha sin hora
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN, // Booleano para activación
      defaultValue: true,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i // Validación de números de teléfono
      }
    },
    role: {
      type: DataTypes.ENUM('admin', 'user', 'moderator'), // Rol de usuario
      defaultValue: 'user'
    },
    address: {
      type: DataTypes.JSON, // Datos de dirección estructurados
      allowNull: true,
      validate: {
        isAddress (value) {
          if (value && (!value.street || !value.city || !value.zipCode)) {
            throw new Error(
              'La dirección debe incluir calle, ciudad y código postal.'
            )
          }
        }
      }
    },
    preferences: {
      type: DataTypes.JSON, // Cambiado a JSON
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW // Fecha de creación automática
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW // Fecha de actualización automática
    }
  },
  {
    timestamps: true // Habilitar timestamps por defecto
  }
)

module.exports = User
