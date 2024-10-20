/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Sb9gtDD` ON `students` (`usn`)",
    "CREATE UNIQUE INDEX `idx_KsyhbXq` ON `students` (`user`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnlaphfq",
    "name": "user",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w64b4aclo9ny2z3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Sb9gtDD` ON `students` (`usn`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnlaphfq",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
