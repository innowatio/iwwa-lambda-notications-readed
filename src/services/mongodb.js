import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

export const mongodb = MongoClient.connect(MONGODB_URL);

export const upsert = async function upsert (collectionName, element, id) {
    const db = await mongodb;
    return db.collection(collectionName).update(
        {_id: id},
        {$set: element},
        {upsert: true}
    );
};
