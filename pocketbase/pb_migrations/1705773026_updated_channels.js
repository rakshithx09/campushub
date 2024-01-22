/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("geb7nxmbi2foqqn")

  collection.indexes = [
    "CREATE INDEX `idx_WR9vunf` ON `channels` (\n  `name`,\n  `server`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0yz8fvl",
    "name": "server",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e0itzmilo9n1853",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("geb7nxmbi2foqqn")

  collection.indexes = [
    "CREATE INDEX `idx_WR9vunf` ON `channels` (\n  `name`,\n  `server_id`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0yz8fvl",
    "name": "server_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e0itzmilo9n1853",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
