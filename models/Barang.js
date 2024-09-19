import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Barang = db.define(
  "barang",
  {
    kode: DataTypes.STRING,
    part_number: DataTypes.STRING,
    nama: DataTypes.STRING,
    id_satuan: DataTypes.INTEGER,
    id_kategori: DataTypes.INTEGER,
    upc: DataTypes.STRING,
    harga_jual: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    underscored: true
  }
);

export default Barang;

(async () => {
  await db.sync();
})();
