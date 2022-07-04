const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    image: DataTypes.STRING,

  },
  {
    timestamps: false
  });

  return Products;
}

module.exports = Products; 