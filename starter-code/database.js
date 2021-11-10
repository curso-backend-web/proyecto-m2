import { MongoClient } from "mongodb";
import config from './config.js';

class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(param) {
    // parameters and properties always come here

    console.log(param);
    this.url = param.url;
    this.myDb = param.database;
    

  }

  async connect() {
    try {
      if (this.database) {
        return
      } else {
        console.log('database connect works');
        //implementa aquí la conexión a la bbdd
        // we make an instance of mongoclient that is going to connect to the database
        const client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });

        this.database = await client.connect();
        console.log(this.database);
        
      }
    } catch (error) {

      console.log(`${error.message} and connect doesn't work`);

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
      await this.connect();
      // Implement the query to insert a user
      const result = await this.database.db(this.myDb).collection('clients').insertOne(user);
      console.log('Insert user it works!! ;)');
      return result;
    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connect();
      // Implement the query to list users
      const result =  this.database.db(this.myDb).collection('clients').find();
      console.log('List userit works!! ;)');
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connect();

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
      await this.connect();

      // Implement the query to insert a product
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
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productName) {
    try {
      await this.connect();

      // Implement the query to delete a product
      // productName is the name of the producto to delete
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async addProductToShoppingCart({ userFirstName, productName }) {
    try {
      await this.connect();

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
      await this.connect();
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