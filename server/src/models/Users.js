import sequelize from "../config/sequelize.js";
import sequelize from "../config/sequelize.js";
import bcrypt from "bcryptjs";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('m', 'f', 'o'),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('super_admin', 'artist_manager', 'artist'),
    allowNull: false,
    defaultValue: 'artist',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
},
  {
    tableName: "User",
    modelName: "User",
    timestamps: true,
    paranoid: true,
    hooks: {
      beforeCreate: async (user, options) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }

        const slugBase = `${user.firstName}-${user.lastName}`;
        user.slug = slugify(slugBase, { lower: true });
      },
    }
  }
);

User.prototype.checkPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

export default User;