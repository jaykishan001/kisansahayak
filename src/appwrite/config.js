import { Client, Databases,Storage, ID, Query } from "appwrite";
import conf from "../conf/conf"

class Service  {
    client = new Client() 
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)    
    }
    
    // create Card

    async createCard ({ category, status, slug, featuredImage, userId, quantity, bought, expiry}) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    product,
                    status,
                    featuredImage,
                    expiry,
                    bought,
                    userId,
                    category,
                    quantity
                }
            )
        } catch (error) {
            console.log("appwrite error create card::", error ) 
        }
    }

    //update card

    async updateCard(slug, {category, status, featuredImage, quantity, bought, expiry}) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    category,
                    status,
                    featuredImage,
                    quantity,
                    bought,
                    expiry,
                    bought,
                }
            )
        } catch (error) {
            console.log("appwrite error updateCard::", error)
        }
    }
    
    async deleteCard(slug) {
        try {
            return await this.database.deleteDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
        } catch (error) {
            console.log("appwrite error delete Card::", error);
        }
    }
    async getCard({slug}) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("appwrite error getpost::", error)
            return false;
        }
    }

    async getCards (queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("appwrite error :: ", error)
        }

    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            // it will return file id 
        } catch (error) {
            console.log("appwrite error::" , error)
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appwrite error deleteFile::" , error)
        }

    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service
export default service