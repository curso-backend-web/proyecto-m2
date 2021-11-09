import mysql from 'mysql2/promise';
import { config } from './config.js';
import user from './data/users.js';
import product from './data/products.js';

class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(config) {
    this.db = config.db;
  }


  async connect(db) {
    try {
      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        this.database = await mysql.createConnection(db);
      }
    } catch (error) {
      console.log(error);
    }
  }


  async close() {
    if (this.database) {
      await this.database.end(true, callback);
    } else {
      return;
    }
  }

  async insertUser(user) {
    try {
      await this.connect();
      // Implement the query to insert a user
      await this.database.query(`insert into user (firstName, lastName, dateBirth, street, city, state, postalCode) values(?,?,?,?,?,?,?)`,
        [user.firstName, user.lastName, user.dateBirth, address.street, address.city, address.state, address.postalCode])
      // user is the document that we want to insert

      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connect();
      // Implement the query to list users
      await this.database.query(`select * from user`);

      console.log('it works!! ;)')
      return [];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id) {
    try {
      await this.connect();
      // Implement the query to delete a user
      // firstName is the name of user that we want to delete
      await this.database.query(
        `delete from user where id=?`,
        [id]
      );
      console.log('it works!! ;)')
      return {};
    } catch (error) {
      console.log(error);
    }
  }

  async insertProduct(product) {
    try {
      await this.connect();
      // Implement the query to insert a product
      await this.database.query(
        `insert into product (idUser, name, description, category, price) values(?,?,?,?,?)`,
        [user.idUser, product.name, product.description, product.category, product.price]
      )
      // product is the document to insert
      console.log('it works!! ;)')

    } catch (error) {
      console.log(error);
    }
  }

  async listProducts() {
    try {
      await this.connect();
      // Implement the query to list all products
      await this.database.query(`select * from product`);
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(id) {
    try {
      await this.connect();
      await this.database.query(
        `delete from product where id=?`,
        [id]
      );
      // Implement the query to delete a product
      // productName is the name of the producto to delete
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToShoppingCart(user, product ) {
    try {
      await this.connect();
      // Implement the query to buy a product
      await this.database.query(`insert into shoppingcart (idUser) values(?)`, [user.idUser]);
      // userFirstName is the name of user who purchase the product
      // productName is the name of the product that we want to buy
      // Think if you may need to implement two queries chained
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addReviewToProduct(purchase, review) {
    try {
      await this.connect();
      // Implement the query to review a product
      await this.database.query(`insert into review (idPurchase, name, comment, stars, date) values(?,?,?,?,?,?)`,
      [purchase.idPurchase, review.name, review.comment, review.stars, review.date]);
      // productName is the name of the product to review
      // review is the document to insert
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Database(config);