/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ahzd5h8pf56vyhv",
    "created": "2024-01-26 06:11:26.185Z",
    "updated": "2024-01-26 06:11:26.185Z",
    "name": "members",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qxie6nrr",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "a6mohvlo",
        "name": "channel",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vo7trxegk4h1yem",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_CaaTxE5` ON `members` (\n  `user`,\n  `channel`\n)"
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
  const collection = dao.findCollectionByNameOrId("ahzd5h8pf56vyhv");

  return dao.deleteCollection(collection);
})
