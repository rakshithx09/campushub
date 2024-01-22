/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avye5yuh8ptsyi4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7rhxe9lw",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avye5yuh8ptsyi4")

  // remove
  collection.schema.removeField("7rhxe9lw")

  return dao.saveCollection(collection)
})
