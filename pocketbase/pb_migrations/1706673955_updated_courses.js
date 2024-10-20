/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("euy5d8ilocq4tka")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1uhh2z3",
    "name": "server",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rmc92qqgqi0ygvb",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("euy5d8ilocq4tka")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o1uhh2z3",
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
  }))

  return dao.saveCollection(collection)
})
