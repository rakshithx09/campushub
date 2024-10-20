/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkkgsfid",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  // remove
  collection.schema.removeField("pkkgsfid")

  return dao.saveCollection(collection)
})
