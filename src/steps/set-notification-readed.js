import {upsert} from "../services/mongodb";
import {NOTIFICATION_COLLECTION_NAME} from "../config";
import findById from "./find-by-id";

export async function setNotificationReaded (notificationId) {
    const notification = await findById(notificationId);
    if (!notification) {
        return null;
    }
    await upsert(
        NOTIFICATION_COLLECTION_NAME,
        {readed: true},
        notificationId
    );
}
