import swaggerJSDoc from 'swagger-jsdoc'

/*
* @description - Swagger definition
*/
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Demo Notes API Docs",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger.",
      contact: {
        name: "Pascal Mayr",
        url: "https://pascalmayr.com",
        email: "mail@pascalmayr.com`",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/api/v1/notes/index.ts"],
};

export default swaggerJSDoc(options);
