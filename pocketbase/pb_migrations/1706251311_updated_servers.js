/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rmc92qqgqi0ygvb")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rmc92qqgqi0ygvb")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
