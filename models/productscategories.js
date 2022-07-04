const ProductCategories = (sequelize, DataTypes) => {
  const ProductCategories = sequelize.define(
    'ProductCategory',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    },
    { timestamps: false },
  );

  return ProductCategories;
}

module.exports = ProductCategories; 