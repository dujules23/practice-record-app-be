
exports.up = function(knex) {
  return knex.schema.createTable('practice', tbl => {
    tbl.increments("id");
    tbl.date("practice_day").notNullable();
    tbl.string('duration', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('practice')
};
