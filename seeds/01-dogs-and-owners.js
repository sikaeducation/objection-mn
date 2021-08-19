exports.seed = async knex => {
  await knex("dog").del()
  await knex("person").del()

  await knex("person").insert([{
    id: 1,
    name: "Kyle"
  },{
    id: 2,
    name: "Elyse"
  }])

  await knex("dog").insert([{
    id: 1,
    name: "Bixby",
  },{
    id: 2,
    name: "Mesa",
  },{
    id: 3,
    name: "Harmony",
  }])

  await knex("dog_owner").insert([{
    id: 1,
    dog_id: 1,
    owner_id: 1,
  },{
    id: 2,
    dog_id: 2,
    owner_id: 1,
  },{
    id: 3,
    dog_id: 2,
    owner_id: 2,
  },{
    id: 4,
    dog_id: 3,
    owner_id: 2,
  }])
}
