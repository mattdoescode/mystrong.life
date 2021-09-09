module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      confirmedemail: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob: {
        type: Sequelize.DATEONLY,
        
      },
      membernotes: {
        type: Sequelize.TEXT
      }
    });
  
    return User;
};