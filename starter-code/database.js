import mysql from 'mysql2/promise';
import {config} from './config.js';

class Database {

//puedes implementar el constructor si vas a usarlo
constructor(config){

  this.mySQL=config.mySQL;

}

  async connect(db) {
    try {
      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        this.database = await mysql.createConnection(db);
        //this.database = //tu conexión;
        console.log('connection Ok');
      }
    } catch (error) {
      console.log(error);
    }
  }


  async close() {
    if (this.database) {
      await this.database.close(true, callback);
    } else {
      return;
    }
  }

  async insertUser(user) {
    try {

      await this.connect;
      // Implement the query to insert a user
      // user is the document that we want to insert
      // const results = await connection.execute('INSERT INTO (`firstName`,`lastName`,`dateBirth`,`address_address_id`,`historial_historial_id`) 
      // VALUES ("user.firstName","user.lastName","user.DateBirth","user.address.streetAddress","user.address.","user.address.","user.address.","user.address.","user.address.")');

      console.log('it works!! ;)')


      if(err) throw err;
      await this._dropConnection();

      return results;

      
    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connect;
      // Implement the query to list users
      'SELECT * FROM cliente';
      console.log('it works!! ;)')
      return [];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connect;

      // Implement the query to delete a user
      // firstName is the name of user that we want to delete
      console.log('it works!! ;)')
      return {};
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

export default new Database(config);