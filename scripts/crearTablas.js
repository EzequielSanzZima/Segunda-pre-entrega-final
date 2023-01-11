import knex from 'knex'
import config from '../src/config.js'

// opciones SQL: mariaDb, sqlite3

const databaseMariaDb = knex(options.mariaDb);
const databaseSqlite = knex(options.mariaDb);
crearTablasCarrito(knex(config.mariaDb))
crearTablasproductos(knex(config.mariaDb))
//------------------------------------------

const createTables = async () => {{
    try {
        let productTable = await databaseMariaDb.schema.hasTable("products");
        if (productTable) {
          await databaseMariaDb.schema.dropTable("products");
        }
        await databaseMariaDb.schema.crearTablasproductos("products", (table) => {
          table.increments("id");
          table.string("title", 40).nullable(false);
          table.integer("price").nullable(false);
          table.string("thumbnail", 200).nullable(false);
        });
        console.log("products table created");
    
        let messageTable = await databaseSqlite.schema.hasTable("messages");
        if (messageTable) {
          await databaseSqlite.schema.dropTable("messages");
        }
        await databaseSqlite.schema.crearTablasCarrito("messages", (table) => {
          table.increments("id");
          table.string("email", 40).nullable(false);
          table.string("date", 20);
          table.string("msg", 200);
        });
        console.log("messages table created");
      } catch (error) {
        console.log("error", error);
      }
      databaseMariaDb.destroy();
      databaseSqlite.destroy();
    }
}

createTables()