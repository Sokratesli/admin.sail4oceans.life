import { Client, Account, Teams, Databases, Query, Permission, Role, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);
 // .setKey(import.meta.env.VITE_APPWRITE_API);

export const account = new Account(client);
export const teams = new Teams(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

//export const database = new Database(client);
export { ID } from "appwrite";
export { Query } from "appwrite";
export { Permission} from "appwrite";
export { Role } from "appwrite";

/*
const client = new sdk.Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_SERVER_PATH) //APPWRITE API URL
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT); //APPWRITE API PROJECT ID
  //.setKey(import.meta.env.VITE_APPWRITE_API); //APPWRITE API KEY
;

let users = new sdk.Users(client);

let promise = users.get('65180f04892554d57c9d');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
*/
