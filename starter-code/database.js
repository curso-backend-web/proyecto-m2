import {MongoClient} from 'mongodb';
import {config} from './config';
class Database {

//puedes implementar el constructor si vas a usarlo
constructor(config){
  this.url = config.url;
  this.db = config.db;
  this.client = new MongoClient(this.url, {useNewUrlParser:true});

}
  async connect() {
    try {

      return await this.client.connect();

    } catch (error) {

      console.log(error);
      this.close();
      throw error;
    }
  }


  async close() {
    
    try {
      this.client.close();

    } catch (error) {

      console.log(error);
      throw error;
    }
  }

  async insertUser(user) {
    try {
      const myConnection = await this.connect();
      if(myConnection)
      // Implement the query to insert a user
      const result = await this.db.collection('clients').insertOne(user);
      // user is the document that we want to insert
      console.log('it works!! ;)');
      this.close();
      return result;
     
    } catch (error) {

      console.log(error);
      throw error;
    }

  }


  async listUsers(data) {
    try {
     const myConnection =  await this.connect();
     // container
     const result = [];

     if(myConnection)
     result = await this.db.collection('clients').insertMany(data);
      // Implement the query to list users
      console.log('it works!! ;)')
      return result;

    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      const myConnection = await this.connect();
      const query = this.db.collection('clients').find({name: firstName});
      
      // Implement the query to delete a user
      if(myConnection)
      const result = await this.db.collection('clients').removeOne(query);
      // firstName is the name of user that we want to delete
      console.log('it works!! ;)');
     // return ;
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

export default Database(config);