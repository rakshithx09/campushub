/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  // remove
  collection.schema.removeField("rioqxukr")

  // remove
  collection.schema.removeField("roe6kxdp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkhn4xez",
    "name": "branch_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kj0mohxjb1uxc9h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6r8kblhv",
    "name": "section_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "avye5yuh8ptsyi4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rioqxukr",
    "name": "branch",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "roe6kxdp",
    "name": "section",
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

  // remove
  collection.schema.removeField("pkhn4xez")

  // remove
  collection.schema.removeField("6r8kblhv")

  return dao.saveCollection(collection)
})
