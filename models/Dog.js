const { Model } = require("objection")
const database = require("../database-connection")
Model.knex(database)

class Dog extends Model {
  static tableName = "dog"

  static get relationMappings(){
    return {
      owners: {
        relation: Model.ManyToManyRelation,
        modelClass: require("./Person"),
        join: {
          from: "dog.id",
          through: {
            from: "dog_owner.dog_id",
            to: "dog_owner.owner_id",
          },
          to: "person.id"
        },
      },
    }
  }
}

module.exports = Dog
