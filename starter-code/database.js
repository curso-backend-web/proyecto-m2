
class Database {

//puedes implementar el constructor si vas a usarlo

  async connect() {
    try {
      if (this.database) {
        return
      } else {
        //implementa aquí la conexión a la bbdd
        this.database = //tu conexión;
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
      console.log('it works!! ;)')
    } catch (error) {
      console.log(error);
    }

  }


  async listUsers() {
    try {
      await this.connect;
      // Implement the query to list users
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

export default Database;