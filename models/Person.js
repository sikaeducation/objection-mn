const { Model } = require("objection")
const database = require("../database-connection")
Model.knex(database)

class Person extends Model {
  static tableName = "person"

  static get relationMappings(){
    return {
      dogs: {
        relation: Model.ManyToManyRelation,
        modelClass: require("./Dog"),
        join: {
          from: "person.id",
          through: {
            from: "dog_owner.owner_id",
            to: "dog_owner.dog_id",
          },
          to: "dog.id"
        },
      },
    }
  }
}

module.exports = Person
