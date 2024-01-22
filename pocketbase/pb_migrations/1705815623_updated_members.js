/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mo5wc0gu38kbp0t")

  collection.indexes = [
    "CREATE INDEX `idx_OwWfQK2` ON `members` (\n  `user`,\n  `server`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mo5wc0gu38kbp0t")

  collection.indexes = []

  return dao.saveCollection(collection)
})
