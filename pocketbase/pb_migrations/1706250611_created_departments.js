/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gdbl971ip161fhz",
    "created": "2024-01-26 06:30:11.254Z",
    "updated": "2024-01-26 06:30:11.254Z",
    "name": "departments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bu1fhliu",
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_XwDDRy3` ON `departments` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("gdbl971ip161fhz");

  return dao.deleteCollection(collection);
})
