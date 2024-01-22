/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avye5yuh8ptsyi4")

  collection.indexes = [
    "CREATE INDEX `idx_lug6bC4` ON `sections` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avye5yuh8ptsyi4")

  collection.indexes = []

  return dao.saveCollection(collection)
})
