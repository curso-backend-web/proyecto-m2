import mysql from 'mysql2/promise';
import { config } from './config.js';
class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(config) {
    this.db = config;
  }
  async connect(db) {
    try {
      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        this.database = await mysql.createConnection(db);//tu conexión;
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

      await this.connect(this.db);
      let sql = "INSERT INTO clientes \
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
      const result = await this.database.query(sql, values, (err, result) => {
        if (err) throw err;
        
        this.database.end();
        return result;
      });

      console.log('it works!! ;)')
      await this.close();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async listUsers() {
    try {
      await this.connect(this.db);
      // Implement the query to list users
      const query = "SELECT * FROM eshop.clientes";
      const result = await this.database.query(query)
      let users = result[0];
      
      console.log('it works!! ;)')
      await this.close();

      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connect(this.db);

      // Implement the query to delete a user
      // firstName is the name of user that we want to delete
      const sql = "\
      DELETE FROM eshop.clientes where clientes.firstName = ?; \
      ";
      const value = [firstName];

      const result = await this.database.query(sql, value, (err, result) => {
        if (err) throw err;
        
        this.database.end();
        return result;
      });

      console.log('it works!! ;)')
      await this.close();
      return result[0];

      // return {};
    } catch (error) {
      console.log(error);
    }
  }

  async insertProduct(product) {
    try {
      await this.connect;

      // Implement the query to insert a product
      // product is the document to insert
      console.log('it works!! ;)')

    } catch (error) {
      console.log(error);
    }
  }

  async listProducts() {
    try {
      await this.connect;

      // Implement the query to list all products
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productName) {
    try {
      await this.connect;

      // Implement the query to delete a product
      // productName is the name of the producto to delete
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToShoppingCart({ userFirstName, productName }) {
    try {
      await this.connect;

      // Implement the query to buy a product
      // userFirstName is the name of user who purchase the product
      // productName is the name of the product that we want to buy
      // Think if you may need to implement two queries chained
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addReviewToProduct({ productName, review }) {
    try {
      await this.connect;
      // Implement the query to review a product
      // productName is the name of the product to review
      // review is the document to insert
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;