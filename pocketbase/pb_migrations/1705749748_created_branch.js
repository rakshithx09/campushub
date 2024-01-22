/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kj0mohxjb1uxc9h",
    "created": "2024-01-20 11:22:28.222Z",
    "updated": "2024-01-20 11:22:28.222Z",
    "name": "branch",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0uieugsm",
        "name": "name",
        "type": "text",
        "required": false,
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
        "id": "7oagvhdx",
        "name": "hod",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("kj0mohxjb1uxc9h");

  return dao.deleteCollection(collection);
})
