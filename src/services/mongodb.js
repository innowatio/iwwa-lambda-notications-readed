import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

var mongoClientInstance;

export async function getMongoClient () {
    if (!mongoClientInstance) {
        mongoClientInstance = await MongoClient.connect(MONGODB_URL);
    }
    return mongoClientInstance;
}

export const upsert = async function upsert (collectionName, element, id) {
    const db = await getMongoClient();
    await db.collection(collectionName).update(
        {_id: id},
        {$set: element},
        {upsert: true}
    );
};
