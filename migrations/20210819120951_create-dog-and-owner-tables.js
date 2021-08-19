exports.up = async knex => {
  await knex.schema.createTable("person", table => {
    table.integer("id")
    table.string("name")
  })

  await knex.schema.createTable("dog", table => {
    table.integer("id")
    table.string("name")
  })

  await knex.schema.createTable("dog_owner", table => {
    table.integer("id")
    table.integer("owner_id").references("id").inTable("person")
    table.integer("dog_id").references("id").inTable("dog")
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("dog_owner")
  await knex.schema.dropTableIfExists("dog")
  await knex.schema.dropTableIfExists("person")
};
