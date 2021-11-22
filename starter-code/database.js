import { MongoClient } from "mongodb";
import readline from "readline";

class Database {
  //puedes implementar el constructor si vas a usarlo
  constructor(param) {
    // parameters and properties always come here

    this.url = param.url;
    this.myDb = param.database;

    // to sparate later as raul taugh us
    this.clients = "clients";
    this.products = "products";
    this.reviews = "reviews";

    // questions if users more than one
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async connect() {
    try {
      if (this.database) {
        return;
      } else {
        console.log("database connect works");
        //implementa aquí la conexión a la bbdd
        // we make an instance of mongoclient that is going to connect to the database
        const client = new MongoClient(this.url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

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
      return await this.database
        .db(this.myDb)
        .collection(this.clients)
        .insertOne(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async listUsers() {
    try {
      await this.connect();
      // Implement the query to list users
      return this.database.db(this.myDb).collection(this.clients).find();
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteUser(userName) {
    try {
      await this.connect();
      // Implement the query to delete users
      return await this.database
        .db(this.myDb)
        .collection(this.clients)
        .deleteOne({
          firstName: userName.firstName,
          lastName: userName.lastName,
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  async findUsers(userName) {
    try {
      await this.connect();

      return this.database
        .db(this.myDb)
        .collection(this.clients)
        .find({ firstName: userName.firstName, lastName: userName.lastName });
    } catch (error) {
      console.log(error.message);
    }
  }
  async insertProduct(product) {
    try {
      await this.connect();
      // Implement the query to insert a product
      return this.database
        .db(this.myDb)
        .collection(this.products)
        .insertOne(product);
    } catch (error) {
      console.log(error.message);
    }
  }

  async listProducts() {
    try {
      await this.connect();
      // Implement the query to list all products
      return this.database.db(this.myDb).collection(this.products).find();
    } catch (error) {
      console.log(error.message);
    }
  }
  async findProduct(productName) {
    try {
      await this.connect();

      return this.database
        .db(this.myDb)
        .collection(this.products)
        .find(
          { name: productName },
          { projection: { _id: 1, name: 1, price: 1 } }
        )
        .toArray();
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteProduct(productName) {
    try {
      await this.connect();
      // Implement the query to delete a product
      return await this.database
        .db(this.myDb)
        .collection(this.products)
        .deleteOne({ name: productName });
    } catch (error) {
      console.log(error.message);
    }
  }

  async addProductToShoppingCart(userFirstName, productName) {
    try {
      await this.connect();
      // it might change the data, so no const
      let user = await this.database
        .db(this.myDb)
        .collection(this.clients)
        .find({ firstName: userFirstName })
        .toArray();

      const product = await this.findProduct(productName);

      // if many create function to ask surname in console.
      if (user.length > 1) {
        const userLastName = await this.startQuestion();

        user = await this.database
          .db(this.myDb)
          .collection(this.clients)
          .find({ firstName: userFirstName, lastName: userLastName })
          .toArray();

        const result = await this.database
          .db(this.myDb)
          .collection(this.clients)
          .updateOne(
            { firstName: userFirstName, lastName: userLastName },
            { $push: { shoppingCart: { $each: product } } }
          );
        console.log(result);
      } else {
        const result = await this.database
          .db(this.myDb)
          .collection(this.clients)
          .updateOne(
            { firstName: userFirstName },
            { $push: { shoppingCart: { $each: product } } }
          );
        console.log(result);
      }
    } catch (error) {
      3;

      console.log(error.message);
    }
  }

  // rl working with async!
  askMe(insertedQuestion) {
    return new Promise((res, rej) => {
      this.rl.question(insertedQuestion, (input) => res(input));
    });
  }

  async startQuestion() {
    const lastName = await this.askMe("User´s last name: ");
    this.rl.close();
    return lastName;
  }
  async addReviewToProduct({ productName, review }) {
    try {
      await this.connect();
      // Implement the query to review a product
      // productName is the name of the product to review
      // review is the document to insert
      console.log("it works!! ;)");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Database;
