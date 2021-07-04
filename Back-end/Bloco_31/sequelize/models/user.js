const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
      // aqui inserimos o datatype da coluna criada
    phone_num: DataTypes.STRING,
  });
  
  return User;
}

module.exports = User;