
import { MongoClient, ObjectId } from 'mongodb';

class Database {

  //puedes implementar el constructor si vas a usarlo
  constructor(config) {
    this.url = config.url;
    this.db = config.database;
    this.client = new MongoClient(this.url, { useNewUrlParser: true });

  }

  async connect() {
    try {

      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        await this.client.connect();
        this.database = this.client.db(this.db);


      }
    } catch (error) {

      console.log(error);
    }
  }


  async close() {
    if (this.database) {
      await this.database.close();
    } else {
      return;
    }
  }

  async insertUser(user) {
    try {
      await this.connect();
      const col = this.database.collection('cliente');
      const result = await col.insertOne(user);
      // Implement the query to insert a user
      // user is the document that we want to insert
      console.log('it works!! ;)');

      return result.insertedId;

    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connect();
      const col = this.database.collection('cliente');
      const result = await col.find({}).toArray();
      console.log('it works!! ;)')
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(firstName) {
    try {
      await this.connect();
      const col = this.database.collection('cliente');
      const result = await col.deleteOne({ firstName: firstName });
      // Implement the query to delete a user
      // firstName is the name of user that we want to delete
      console.log('it works!! ;)')
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async insertProduct(product) {
    try {
      await this.connect();
      const col = this.database.collection('producto');
      const result = await col.insertOne(product);

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
      const col = this.database.collection('producto');
      const result = await col.find({}).toArray();
      // Implement the query to list all products
      return result;
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(productName) {
    try {
      await this.connect();
      const col = this.database.collection('producto');
      const result = await col.deleteOne({ name: productName });
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

      const { _id } = await this.database
        .collection('cliente')
        .findOne({ firstName: userFirstName });
      const _idCliente = _id;
   
      if (_idCliente) {
        
        let product = await this.database
          .collection('producto')
          .find({ name: productName},{projection:{_id:1}}).toArray();
      
        //Water Bottle
        if (product.length) {
      
          const result = await this.database
            .collection('cliente')
            .updateOne({ '_id': _idCliente }, { $push: { shoppingCart: {$each: product} } });

        }
        //   

        // Implement the query to buy a product
        // userFirstName is the name of user who purchase the product
        // productName is the name of the product that we want to buy
        // Think if you may need to implement two queries chained
        console.log('it works!! ;)')
      } else {
        console.log('Client don\'t exist ;)');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addReviewToProduct({ productName, review }) {
    try {
      await this.connect();
      const { _id } = await this.database
        .collection('producto')
        .findOne({ name: productName });
        if (_id) {
          const result = await this.database
          .collection('producto')
          .updateOne({ '_id': _id }, { $push: { reviews:review }});
        }
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