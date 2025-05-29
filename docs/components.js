module.exports = {
    components:{
        schemas:{
                        _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },

            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task to register",
                        example:"task1"
                    },
                    completed:{
                        type:'boolean',
                        description:"task is completed or to be",
                        example: false
                    },
                  }
            }
        }
    }
}
