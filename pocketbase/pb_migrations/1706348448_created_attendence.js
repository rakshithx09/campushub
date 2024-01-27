/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0ntxgbx8oaejzjd",
    "created": "2024-01-27 09:40:48.435Z",
    "updated": "2024-01-27 09:40:48.435Z",
    "name": "attendence",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hrubyaxr",
        "name": "student",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "w64b4aclo9ny2z3",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "9zjfoewo",
        "name": "course",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "euy5d8ilocq4tka",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "jucnuzuz",
        "name": "date",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "6r0zfa6h",
        "name": "present",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dxgdamxz",
        "name": "note",
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
        "id": "pik9oah1",
        "name": "period",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("0ntxgbx8oaejzjd");

  return dao.deleteCollection(collection);
})
