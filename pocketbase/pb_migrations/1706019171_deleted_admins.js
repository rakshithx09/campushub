/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("btsmpr1j34dg7kd");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "btsmpr1j34dg7kd",
    "created": "2024-01-20 11:45:07.056Z",
    "updated": "2024-01-20 11:47:19.279Z",
    "name": "admins",
    "type": "auth",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": false,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
