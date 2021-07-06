const { ConstraintSnakeNamingStrategy } = require("./src/config/ConstraintSnakeNamingStrategy");

module.exports = {
    host: process.env.TYPEORM_HOST | "localhost",
    port: Number(process.env.TYPEORM_PORT) | 5432,
    username: process.env.TYPEORM_USERNAME | "test",
    password: process.env.TYPEORM_PASSWORD | "test",
    database: process.env.TYPEORM_DATABASE | "test",
    synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
    logging: process.env.TYPEORM_LOGGING === "true",
    dropSchema: process.env.TYPEORM_DROP_SCHEMA === "true",
    migration: process.env.TYPEORM_MIGRATION === "true",
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        'src/migration/**/*.ts'
    ],
    subscribers: [
        'src/subscriber/**/*.ts'
    ],
    cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    },
    namingStrategy: new ConstraintSnakeNamingStrategy(),
}
