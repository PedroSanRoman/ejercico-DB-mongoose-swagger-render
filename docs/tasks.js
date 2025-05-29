module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          Users: "Create a task",
        },
        description: "Create Task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Task created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },
  "/": {
      get: {
        tags: {
          Users: "Get tasks",
        },
        description: "Get all Tasks",
        operationId: "getTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Tasks got successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },
    "/id/{_id}": {
         put: {
           tags: {
             Tasks: "Update a task",
           },
           description: "Update Task",
           operationId: "updateTask",
           parameters: [
             {
               name: "_id",
               in: "path",
               schema: {
                 $ref: "#/components/schemas/_id",
               },
               description: "Id of Task to be updated",
             },
           ],
           requestBody: {
             content: {
               "application/json": {
                 schema: { $ref: "#/components/schemas/Task" },
               },
             },
           },
           responses: {
             200: { description: "User updated successfully" },
             500: { description: "Server error" },
           },
         },
       },
  },
},
};


