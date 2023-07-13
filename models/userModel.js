const mongoose = require("mongoose")


const userSchema =  mongoose.Schema({

    name: {
      type: String,
      required:[true, "Please Peovide Name"]
    },

    email: {
      type: String,
      required:[true, "Please Peovide Email"]
    },

    phone: {
      type: String,
      required:[true, "Please Peovide Phone Number"]
    }
    
})

module.exports = mongoose.model("user", userSchema)
