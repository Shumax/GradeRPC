module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Data_json', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dados: {
        allowNull: false,
        type: DataTypes.JSON,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Data_json');
  }
};