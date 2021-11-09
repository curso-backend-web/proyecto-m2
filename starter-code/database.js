import mysql from 'mysql2/promise';
import config from "./config.js";

class Database {

//puedes implementar el constructor si vas a usarlo
  constructor(config){
    this.mySQL = config.mySQL;
  }

  async connect(mySQL) {
    try {
      // if (this.database) {
      //   return
      // } else {
        this.connection = await mysql.createConnection(mySQL);
      // }
    } catch (error) {
      console.log(error);
    }
  }


  async close() {
    this.connection.end();
    // if (this.database) {

      // await this.database.close(true, callback);
    // } else {
    //   return;
    // }
  }



  async insertUser(user) {
    try {
      await this.connection.query(
      'insert into client (first_name, last_name) VALUES(?, ?)', [req.body.first_name, req.body.last_name])
      // user is the document that we want to insert
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connection.query(
        'SELECT first_name, last_name FROM `client'
      )
      console.log('it works!! ;)')
      return [];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connection.query(
        'delete from user where user_id = req.body.user_id'
      )
      console.log('it works!! ;)')
      return {};
    } catch (error) {
      console.log(error);
    }
  }

  async insertProduct(product) {
    try {
      await this.connect;
      await this.connection.query(
        'insert into product (first_name, last_name) VALUES(?, ?)', [req.body.first_name, req.body.last_name])
      console.log('it works!! ;)')

    } catch (error) {
      console.log(error);
    }
  }

  async listProducts() {
    try {
      await this.connection.query(
        'SELECT first_name, last_name FROM `product'
      )
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productName) {
    try {
      await this.connection.query(
        'delete from product where product_id = req.body.product_id'
      )

      // Implement the query to delete a product
      // productName is the name of the producto to delete
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToShoppingCart({ userFirstName, productName }) {
    try {
      await this.connection.query(
        'insert into carrito (userFirstName, productName) values(?,?) where user_id = user_id'
      )

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
      await this.connection.query(
        'insert into valoracion(name, comment, stars)VALUES(?,?,?), where product_id = product_id'
      )
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;