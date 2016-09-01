import {upsert} from "../services/mongodb";
import {NOTIFICATION_COLLECTION_NAME} from "../config";
import findById from "./find-by-id";

export async function setNotificationReaded (userId, notificationId) {
    const notification = await findById(notificationId, userId);
    if (!notification) {
        return null;
    }
    await upsert(
        NOTIFICATION_COLLECTION_NAME,
        {readed: true},
        `${notificationId}-${userId}`
    );
}
