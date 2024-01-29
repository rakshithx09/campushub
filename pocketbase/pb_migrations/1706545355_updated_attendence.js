/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ntxgbx8oaejzjd")

  // remove
  collection.schema.removeField("pik9oah1")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ntxgbx8oaejzjd")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
