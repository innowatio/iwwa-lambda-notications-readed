import {getMongoClient} from "../services/mongodb";
import {NOTIFICATION_COLLECTION_NAME} from "../config";

export default async function (notificationId) {
    const db = await getMongoClient();
    return db.collection(NOTIFICATION_COLLECTION_NAME).findOne({"_id": notificationId});
}
