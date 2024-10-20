/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nw7xemirvj4jsi1")

  collection.createRule = " user.id = @request.auth.id"
  collection.updateRule = " user.id = @request.auth.id"
  collection.deleteRule = " user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nw7xemirvj4jsi1")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
