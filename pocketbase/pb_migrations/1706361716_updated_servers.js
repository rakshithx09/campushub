/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rmc92qqgqi0ygvb")

  collection.indexes = []

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rmc92qqgqi0ygvb")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_lNDgDde` ON `servers` (`name`)"
  ]

  return dao.saveCollection(collection)
})
