/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  // remove
  collection.schema.removeField("hvcpa880")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gghy6ydq",
    "name": "section",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A",
        "B",
        "C",
        "D"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("gghy6ydq")

  return dao.saveCollection(collection)
})
