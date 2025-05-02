import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vehicles", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("plate").notNullable().unique();
    table.string("model_name").notNullable();
    table
      .uuid("player_id")
      .notNullable()
      .references("id")
      .inTable("players")
      .onDelete("CASCADE");
    table.dateTime("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("vehicles");
}
