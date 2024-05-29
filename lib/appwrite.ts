import { Account, Avatars, Client, ID } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.tinysoda.aora",
  projectId: "6656e54e001dff1104bc",
  databaseId: "6656e790000b22c20593",
  userCollectionId: "6656e7e2001e60019b1c",
  videoCollectionId: "6656e992001335bd8826",
  storageId: "6656ec8e003c5229b003",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await SignIn(email, password);
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};

export async function SignIn(email: string, password: string) {
  try {
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}
