const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize({
   database: 'tugas_api_express_mysql',
   host: 'localhost',
   username: 'root',
   password: 'password#45',
   dialect: 'mysql'
});

(async () => {
   try {
       await sequelize.authenticate();
       console.log('Connection has been established successfuly.');
   } catch (error){
       console.log('Unable to connect to the database:', error);
   }
})();

module.exports = sequelize;