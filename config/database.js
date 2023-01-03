module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-ccuq5653t398cofgafmg-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "guitarla_f12q"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "pks552nuEqhxJauWtdxuZah7YGjG5r41"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
