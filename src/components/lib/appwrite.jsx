import { Client, Account, Databases, Query } from "appwrite";

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_SERVER_PATH) //APPWRITE API URL
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); //APPWRITE API PROJECT ID
  //.setKey(import.meta.env.VITE_APPWRITE_API); //APPWRITE API KEY

export const account = new Account(client);
export const databases = new Databases(client);

//export const database = new Database(client);
export { ID } from "appwrite";
export { Query } from "appwrite";
