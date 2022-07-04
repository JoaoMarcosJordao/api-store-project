const Categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING
  },
  {
    timestamps: false
  });

  return Categories;
};

module.exports = Categories; 