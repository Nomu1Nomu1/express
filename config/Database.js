import { Sequelize } from "sequelize";

const db = new Sequelize('db_point_of_sales', 'tino', 'training2024', {
    host: 'connectis.my.id',
    dialect: 'mysql'
})

export default db;