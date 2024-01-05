import { Client, Account, Databases } from 'appwrite';


export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65978f73652c79789e83'
export const DATABASE_ID = '65978fcfc97f76f293d0'
export const COLLECTION_ID_MESSAGES = '65978fee47387fc13672'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65978f73652c79789e83');

export const account = new Account(client);
export const databases = new Databases(client);

export default client;