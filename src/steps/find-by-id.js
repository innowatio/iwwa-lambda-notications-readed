import {mongodb} from "../services/mongodb";
import {NOTIFICATION_COLLECTION_NAME} from "../config";

export default async function (notificationId, userId) {
    const db = await mongodb;
    return db.collection(NOTIFICATION_COLLECTION_NAME).findOne({"_id": `${notificationId}-${userId}`});
}
