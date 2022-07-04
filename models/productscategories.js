const ProductCategories = (sequelize, DataTypes) => {
  const ProductCategories = sequelize.define(
    'ProductCategory',
    {},
    { timestamps: false },
  );
  ProductCategories.associate = (models) => {
   models.Products.belongsToMany(models.Categories, {
      through: ProductCategories,
      foreignKey: 'category_id',
      otherKey: 'product_id',
    });
   models.Categories.belongsToMany(models.Products, {
      through: ProductCategories,
      foreignKey: 'product_id',
      otherKey: 'category_id',
    })
   };

  return ProductCategories;
}

module.exports = ProductCategories; 