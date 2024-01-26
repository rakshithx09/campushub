/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vo7trxegk4h1yem",
    "created": "2024-01-26 06:10:43.111Z",
    "updated": "2024-01-26 06:10:43.111Z",
    "name": "channels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5vj5meiq",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "49qgr9q9",
        "name": "server",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "rmc92qqgqi0ygvb",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_9sDezMX` ON `channels` (\n  `name`,\n  `server`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vo7trxegk4h1yem");

  return dao.deleteCollection(collection);
})
