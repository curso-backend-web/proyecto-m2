import { MongoClient } from "mongodb";
import listUsers from './main.js';

class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(param) {
    // parameters and properties always come here

    console.log(param);
    this.url = param.url;
    this.myDb = param.database;
    // to sparate later as raul taugh us
    this.clients  = 'clients';
    this.products = 'products';

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
      return await this.database.db(this.myDb).collection(this.clients).insertOne(user);
     
    } catch (error) {

      console.log(error.message);
    }

  };


  async listUsers() {
    try {
      await this.connect();
      // Implement the query to list users
      return this.database.db(this.myDb).collection(this.clients).find();
      
    } catch (error) {

      console.log(error.message);
    }
  };

  async deleteUser(userName) {
    try {
      await this.connect();
      // Implement the query to delete users
     return await this.database.db(this.myDb).collection(this.clients).deleteOne({firstName: userName.firstName, lastName: userName.lastName});
     
    } catch (error) {
      
      console.log(error.message);
    }
  };

  async findUsers(userName){
    
    try {
      await this.connect();
      
      return this.database.db(this.myDb).collection(this.clients).find({firstName: userName.firstName, lastName: userName.lastName});
      
    } catch (error) {

      console.log(error.message)
      
    }
  }
  async insertProduct(product) {
    try {

      await this.connect();
      // product is the document to insert
      console.log('it works!! ;)');
      // Implement the query to insert a product
      return this.database.db(this.myDb).collection(this.products).insertOne(product);
      
    } catch (error) {

      console.log(error.message);
    }
  };

  async listProducts() {
    try {
      await this.connect();

      // Implement the query to list all products
      console.log('it works!! ;)')
      return this.database.db(this.myDb).collection(this.products).find();

    } catch (error) {
      console.log(error.message);
    }
  };

  async deleteProduct(productName) {

    try {

      await this.connect();
      // Implement the query to delete a product
      return await this.database.db(this.myDb).collection(this.products).deleteOne({name:productName});

    } catch (error) {

      console.log(error.message);
    }
  };

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
  };

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
  };
}

export default Database;