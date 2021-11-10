import mysql from 'mysql2/promise';
import { config } from './config.js';

class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(config) {
    this.db = config;
  }

  async connect() {
    try {
      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        this.database = await mysql.createConnection(this.db);//tu conexión;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async close() {
    if (this.database) {
      await this.database.end();
    } else {
      return;
    }
  }

  async insertUser(user) {
    try {

      await this.connect();
      const sql = "INSERT INTO clientes \
                (`firstname`,\
                 `lastname`,\
                 `datebirth`,\
                 `address:streetaddress`,\
                 `address:city`,\
                 `address:state`,\
                 `address:postalcode`)\
      VALUES      (?, ?, ?, ?, ?, ?, ?);";

      const values = [
        user.firstName,
        user.lastName,
        user.dateBirth,
        user.address.street,
        user.address.city,
        user.address.state,
        user.address.postalCode];

      // sends queries and receives results
      const result = await this.database.query(sql, values)

      console.log('it works!! ;)')

      return result[0];
    } catch (error) {
      console.log(error);
    }
  }

  async listUsers() {
    try {
      await this.connect();
      // Implement the query to list users
      const sql = "SELECT * FROM eshop.clientes";
      const result = await this.database.query(sql)
      let users = result[0];

      console.log('it works!! ;)')

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connect();
      // Implement the query to delete a user
      // firstName is the name of user that we want to delete
      const _select = "\
      SELECT id_clientes FROM eshop.clientes where clientes.firstName = ?; \
      ";
      let value = [firstName];
      let result = await this.database.query(_select, value);

      const _delete = "DELETE FROM eshop.clientes where clientes.id_clientes = ?; \
      ";
      value = result[0][0].id_clientes;
      result = await this.database.query(_delete, value);

      console.log('it works!! ;)')

      return result[0];
    } catch (error) {
      console.log(error);
    }
  }

  async insertProduct(product) {
    try {
      await this.connect();

      // Implement the query to insert a product
      // product is the document to insert
      const sql = "INSERT INTO eshop.productos \
      ( \
      `name`,\
      `description`,\
      `category`,\
      `price`)\
      VALUES\
      (?,?,?,?);";

      const values = [
        product.name,
        product.description,
        product.category,
        product.price];

      const result = await this.database.query(sql, values);

      console.log('it works!! ;)')
      return result[0];
    } catch (error) {
      console.log(error);
    }
  }

  async listProducts() {
    try {
      await this.connect();

      // Implement the query to list all products
      const sql = "SELECT * FROM eshop.productos";
      const result = await this.database.query(sql)
      let users = result[0];

      console.log('it works!!')

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productName) {
    try {
      await this.connect();

      // Implement the query to delete a product
      // productName is the name of the producto to delete
      const _select = "\
      SELECT id_productos FROM eshop.productos where productos.name = ?; \
      ";
      let value = [productName];
      let result = await this.database.query(_select, value);

      const _delete = "DELETE FROM eshop.productos where productos.id_productos = ?; \
      ";
      value = result[0][0].id_productos;
      result = await this.database.query(_delete, value);

      console.log('it works!! ;')

      return result[0];
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToShoppingCart(userFirstName, productName) {
    try {
      await this.connect();
      // Implement the query to buy a product
      // userFirstName is the name of user who purchase the product
      // productName is the name of the product that we want to buy
      // Think if you may need to implement two queries chained
      
      let _select = "\
      SELECT id_clientes FROM eshop.clientes where clientes.firstName = ?; \
      ";
      let value = [userFirstName];
      let result = await this.database.query(_select, value);

      const userID = result[0][0].id_clientes;

      _select = "\
      SELECT id_productos FROM eshop.productos where productos.name = ?; \
      ";
      value = [productName];
      result = await this.database.query(_select, value);

      const productID = result[0][0].id_productos;

      _select = "\
      INSERT INTO `eshop`.`carrito_compra`\
        (\
        `id_cliente`,\
        `id_producto`,\
        `cantidad`,\
        `fecha`)\
      VALUES\
        (?,?,?,?);"
      const values = [userID, productID, 1, new Date()];

      result = await this.database.query(_select, values);

      console.log('it works!! ;')

      return result[0];
    } catch (error) {
      console.log(error);
    }
  }

  async addReviewToProduct(product, review) {
    try {
      await this.connect();
      
            // Implement the query to review a product
            // productName is the name of the product to review
            // review is the document to insert

      let _select = "\
      SELECT id_clientes FROM eshop.clientes where clientes.firstName = ?; \
      ";
      let value = [review.name];
      let result = await this.database.query(_select, value);

      const userID = result[0][0].id_clientes;

      _select = "\
      SELECT id_productos FROM eshop.productos where productos.name = ?; \
      ";
      value = [product];
      result = await this.database.query(_select, value);

      const productID = result[0][0].id_productos;

      _select = "\
      INSERT INTO `eshop`.`reviews`\
        (`name`,\
        `comment`,\
        `stars`,\
        `date`,\
        `id_prod`,\
        `id_clie`)\
      VALUE\
        (?,?,?,?,?,?);";
      const values = [review.name, review.comment, review.stars, review.date, productID, userID];
      result = await this.database.query(_select, values);
      
      console.log('it works!! ;)', values)

      return result[0];
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;