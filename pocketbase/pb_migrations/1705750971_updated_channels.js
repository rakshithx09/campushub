/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("geb7nxmbi2foqqn")

  collection.indexes = [
    "CREATE INDEX `idx_WR9vunf` ON `channels` (\n  `name`,\n  `server_id`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("geb7nxmbi2foqqn")

  collection.indexes = []

  return dao.saveCollection(collection)
})
