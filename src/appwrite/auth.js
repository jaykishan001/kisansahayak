import { Client, Account, ID } from "appwrite"; // Corrected import statement
import conf from "../conf/conf";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Set the complete endpoint URL including the project ID
      .setProject(conf.appwriteProjectId); // Correct method name: setProject
    this.account = new Account(this.client);
  }

  // signup service or create Account

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }
  // login service

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // logout service

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite error while logout :: ", error);
    }
  }

  // getCurrentUser Data

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
  }

  // signup service or create Account

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }
  // login service

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // logout service

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite error while logout :: ", error);
    }
  }

  // getCurrentUser Data

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite error while fetching userData", error);
    }
  }
  async signUpWithGoogle() {
    try {
      return this.account.createOAuth2Session(
        "google",
        "http://localhost:5173/postform",
        "http://localhost:5173/"
      );
    } catch (error) {
      console.log("appwrite error while google signup", error);
    }
  }
}

const authService = new AuthService();
export default authService;
