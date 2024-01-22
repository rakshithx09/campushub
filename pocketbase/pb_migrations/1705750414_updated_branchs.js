/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0mohxjb1uxc9h")

  collection.name = "department"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0mohxjb1uxc9h")

  collection.name = "branchs"

  return dao.saveCollection(collection)
})
