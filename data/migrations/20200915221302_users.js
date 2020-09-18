exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
    table.increments().primary();
    table
      .text("username")
      .notNull()
      .unique();
    table.text("role").notNull();
    table.text("password").notNull();
  });

  await knex.schema.createTable("tickets", table => {
    table.increments();
    table.text("title").notNull();
    table.text("description").notNull();
    table.text("tried").notNull();
    table.text("category").notNull();
    table.bool("completed").defaultTo(false);
    table.bool("assigned").defaultTo(false);
    table
      .integer("assigned_to")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tickets");
  await knex.schema.dropTableIfExists("users");
};
// comment
// comment
