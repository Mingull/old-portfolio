import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";

const pool = createPool({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "mingull_portfolio",
});

const db = drizzle(pool);
