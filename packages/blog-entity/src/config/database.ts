import "reflect-metadata";
import Container from "typedi";
import { ConnectionOptions, createConnection, useContainer } from "typeorm";
import { ConstraintSnakeNamingStrategy } from "./ConstraintSnakeNamingStrategy";

export async function createDatabaseConnection(): Promise<void> {
    try {
        const connectionOption: ConnectionOptions = {
            type: "postgres",
            host: process.env.TYPEORM_HOST,
            port: Number(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
            logging: process.env.TYPEORM_LOGGING === "true",
            dropSchema: process.env.TYPEORM_DROP_SCHEMA === "true",
            entities: [
                "src/entity/**/*.ts"
            ],
            migrations: [
                'migration/**/*.ts'
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
        };
        useContainer(Container);
        await createConnection(connectionOption);

    } catch (error) {
        throw error;
    }
}
