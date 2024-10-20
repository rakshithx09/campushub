/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ahzd5h8pf56vyhv")

  collection.indexes = [
    "CREATE INDEX `idx_CaaTxE5` ON `members` (\n  `user`,\n  `server`\n)"
  ]

  // remove
  collection.schema.removeField("a6mohvlo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aoutpxq0",
    "name": "server",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rmc92qqgqi0ygvb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ahzd5h8pf56vyhv")

  collection.indexes = [
    "CREATE INDEX `idx_CaaTxE5` ON `members` (\n  `user`,\n  `channel`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a6mohvlo",
    "name": "channel",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vo7trxegk4h1yem",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("aoutpxq0")

  return dao.saveCollection(collection)
})
