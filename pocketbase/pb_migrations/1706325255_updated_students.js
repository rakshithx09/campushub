/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvcpa880",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifgh4tvy",
    "name": "sem",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  // remove
  collection.schema.removeField("hvcpa880")

  // remove
  collection.schema.removeField("ifgh4tvy")

  return dao.saveCollection(collection)
})
