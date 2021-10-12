
exports.up = function(knex) {
  return knex.schema.createTable('produtos',function (tb) {
    tb.decimal('codigo').notNullable()
    tb.string('description').notNullable()
    tb.string('address').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos')
};
