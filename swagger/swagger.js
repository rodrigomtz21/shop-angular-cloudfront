// this file was generated by serverless-auto-swagger
module.exports = {
  swagger: "2.0",
  info: {
    title: "my-angular-shop-app",
    version: "1",
  },
  paths: {
    "/products": {
      get: {
        summary: "getProductsList",
        description: "",
        operationId: "getProductsList.get.products",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [],
        responses: {
          200: {
            description: "Successful API response",
            schema: {
              $ref: "#/definitions/Products",
            },
          },
          500: {
            description: "Failed API response",
            schema: {
              $ref: "#/definitions/ErrorResponse",
            },
          },
        },
      },
      post: {
        summary: "createProduct",
        description: "",
        operationId: "createProduct.post.products",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Body required in the request",
            required: true,
            schema: {
              $ref: "#/definitions/Product",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful API response",
            schema: {
              $ref: "#/definitions/SuccessfulResponse",
            },
          },
          500: {
            description: "Failed API response",
            schema: {
              $ref: "#/definitions/ErrorResponse",
            },
          },
        },
      },
    },
    "/products/{id}": {
      get: {
        summary: "getProductsById",
        description: "",
        operationId: "getProductsById.get.products/{id}",
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful API response",
            schema: {
              $ref: "#/definitions/Product",
            },
          },
          500: {
            description: "Failed API response",
            schema: {
              $ref: "#/definitions/ErrorResponse",
            },
          },
        },
      },
    },
  },
  definitions: {
    Product: {
      properties: {
        id: {
          title: "Product.id",
          type: "string",
        },
        count: {
          title: "Product.count",
          type: "number",
        },
        description: {
          title: "Product.description",
          type: "string",
        },
        title: {
          title: "Product.title",
          type: "string",
        },
        price: {
          title: "Product.price",
          type: "number",
        },
      },
      required: ["id", "count", "description", "title", "price"],
      additionalProperties: false,
      title: "Product",
      type: "object",
    },
    Products: {
      items: {
        $ref: "#/definitions/Product",
      },
      title: "Products",
      type: "array",
    },
    ErrorResponse: {
      properties: {
        message: {
          title: "ErrorResponse.message",
          type: "string",
        },
      },
      required: ["message"],
      additionalProperties: false,
      title: "ErrorResponse",
      type: "object",
    },
    SuccessfulResponse: {
      properties: {
        message: {
          title: "SuccessfulResponse.message",
          type: "string",
        },
      },
      required: ["message"],
      additionalProperties: false,
      title: "SuccessfulResponse",
      type: "object",
    },
  },
  securityDefinitions: {},
};
