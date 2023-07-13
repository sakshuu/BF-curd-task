const user = require("./../models/userModel")


exports.addUser = async (req, res) => {
    try {
        console.log(req.body);
         await user.create(req.body)
        res.json({
            success: true,
            message: "User add Successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}


exports.getUser = async (req, res) => {
     try {
         const result = await user.find()
         res.json({
             success: true,
             message: "All User Fetched Successfully",
             result
         })
     } catch (error) {
         res.json({
             success: false,
             message: `Error ${error}`
         })
     }
 }

 exports.getSingleUser =  async(req,res) => {
    try {
        const result = await user.findById(req.params.id).populate( "name _id")
        res.json({
            success: true,
            message: "User Single Fetched Successfuly",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}

exports.removeUser = async (req, res) => {
    try {
        const {userId} = req.params
        await user.findByIdAndDelete(userId)
        res.json({
            success: true,
            message: "your User remove Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}

  exports.editUser = async (req, res) => {
      try {
         const {userId} = req.params
           await user.findByIdAndUpdate(userId, req.body)
          res.json({
              success: true,
              message: "your user edited Successfully",
          })
      } catch (error) {
          res.json({
              success: false,
              message: `Error ${error}`
          })
     }
 }