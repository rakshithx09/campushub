/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0mohxjb1uxc9h")

  collection.indexes = [
    "CREATE INDEX `idx_rYzV0jo` ON `department` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0mohxjb1uxc9h")

  collection.indexes = []

  return dao.saveCollection(collection)
})
