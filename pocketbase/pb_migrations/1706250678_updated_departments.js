/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gdbl971ip161fhz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "99qdkkvj",
    "name": "hod",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gdbl971ip161fhz")

  // remove
  collection.schema.removeField("99qdkkvj")

  return dao.saveCollection(collection)
})
