import {expect} from "chai";

import {handler} from "index";
import {getMongoClient} from "services/mongodb";
import {run, getEventFromObject} from "../mocks";

describe("On notification event", () => {

    const notificationReadedElement = {
        notificationsIds: ["notification1", "notification2", "notification3"]
    };

    const event = getEventFromObject({
        id: "eventId",
        data: {
            element: notificationReadedElement,
            id: "c13b5bd9-3847-4765-b069-a1c3c35ea591"
        },
        type: "element inserted in collection notifications-readed"
    });


    var db;
    var notificationsCollection;

    before(async () => {
        db = await getMongoClient();
        await db.createCollection("notifications");
        notificationsCollection = db.collection("notifications");
    });

    after(async () => {
        await db.dropCollection("notifications");
        await db.close();
    });

    afterEach(async () => {
        await notificationsCollection.remove({});
    });

    it("set the readed flag of notification in payload as true", async () => {
        await notificationsCollection.insert({_id: "notification1", title: "title"});
        await notificationsCollection.insert({_id: "notification2"});
        await notificationsCollection.insert({_id: "notification3"});
        await run(handler, event);

        const notification1 = await notificationsCollection.findOne({_id: "notification1"});
        expect(notification1).to.deep.equal({
            _id: "notification1",
            readed: true,
            title: "title"
        });
        const notification2 = await notificationsCollection.findOne({_id: "notification2"});
        expect(notification2).to.deep.equal({
            _id: "notification2",
            readed: true
        });
        const notification3 = await notificationsCollection.findOne({_id: "notification3"});
        expect(notification3).to.deep.equal({
            _id: "notification3",
            readed: true
        });
    });

    it("set the readed flag of notification in payload as true only if notification exist", async () => {
        await notificationsCollection.insert({_id: "notification1"});
        await notificationsCollection.insert({_id: "notification3"});
        await run(handler, event);

        const notification1 = await notificationsCollection.findOne({_id: "notification1"});
        expect(notification1).to.deep.equal({
            _id: "notification1",
            readed: true
        });
        const notification2 = await notificationsCollection.findOne({_id: "notification2"});
        expect(notification2).to.deep.equal(null);
        const notification3 = await notificationsCollection.findOne({_id: "notification3"});
        expect(notification3).to.deep.equal({
            _id: "notification3",
            readed: true
        });
    });

});
