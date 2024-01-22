/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6fuszgk",
    "name": "usn",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6fuszgk",
    "name": "usn",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
