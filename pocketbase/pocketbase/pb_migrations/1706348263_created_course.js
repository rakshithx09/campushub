/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "euy5d8ilocq4tka",
    "created": "2024-01-27 09:37:43.106Z",
    "updated": "2024-01-27 09:37:43.106Z",
    "name": "course",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "spwjiz39",
        "name": "course_name",
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
        "id": "ms1kplpz",
        "name": "instructor",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5ac37esmf4365ff",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("euy5d8ilocq4tka");

  return dao.deleteCollection(collection);
})
