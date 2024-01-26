/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0itzmilo9n1853")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0rmkaza",
    "name": "public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e0itzmilo9n1853")

  // remove
  collection.schema.removeField("k0rmkaza")

  return dao.saveCollection(collection)
})
