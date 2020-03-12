module.exports = (sequelize, DataTypes) => {
  const dados_json = sequelize.define('Data_json', {
    dados: DataTypes.JSON
  });

  return dados_json;
}