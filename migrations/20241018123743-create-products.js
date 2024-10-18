'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue:["https://ik.imagekit.io/yogiefani/default-image.jpg?updatedAt=1729254045818"]
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          max:10000
        }
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 5000,
        validate:{
          min:5000
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};