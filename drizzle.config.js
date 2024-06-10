/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://accounts:Wyl8TX1hYRIi@ep-hidden-sunset-a538lwud.us-east-2.aws.neon.tech/ia-interview-morker?sslmode=require",
  },
};
