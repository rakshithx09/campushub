/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vo7trxegk4h1yem")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_9sDezMX` ON `channels` (\n  `name`,\n  `server`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vo7trxegk4h1yem")

  collection.indexes = [
    "CREATE INDEX `idx_9sDezMX` ON `channels` (\n  `name`,\n  `server`\n)"
  ]

  return dao.saveCollection(collection)
})
