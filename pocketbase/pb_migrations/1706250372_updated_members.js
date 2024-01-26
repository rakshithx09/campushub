/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ahzd5h8pf56vyhv")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_CaaTxE5` ON `members` (\n  `user`,\n  `server`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ahzd5h8pf56vyhv")

  collection.indexes = [
    "CREATE INDEX `idx_CaaTxE5` ON `members` (\n  `user`,\n  `server`\n)"
  ]

  return dao.saveCollection(collection)
})
