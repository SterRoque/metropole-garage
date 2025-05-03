import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vehicle_customizations", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));

    table
      .uuid("vehicle_id")
      .notNullable()
      .unique()
      .references("id")
      .inTable("vehicles")
      .onDelete("CASCADE");

    table.string("primary_colour").notNullable();
    table.string("secondary_colour");
    table.dateTime("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("vehicle_customizations");
}
