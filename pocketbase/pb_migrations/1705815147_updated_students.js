/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_JTHAZYb` ON `students` (`user`)",
    "CREATE UNIQUE INDEX `idx_oXL3gmP` ON `students` (`usn`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6cz9gl6r",
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
  const collection = dao.findCollectionByNameOrId("5g40co12u8euktb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_JTHAZYb` ON `students` (`user_id`)",
    "CREATE UNIQUE INDEX `idx_oXL3gmP` ON `students` (`usn`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6cz9gl6r",
    "name": "user_id",
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
})
