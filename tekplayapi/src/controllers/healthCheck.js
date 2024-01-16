import mongoose from "mongoose";
const healthCheck= async (req,res)=>{

    try {
        // Check database connectivity
        await mongoose.connection.db.admin().ping();
    
        res.status(200).json({
          status: 'OK',
          message: 'API is healthy',
          database: 'Connected',
          version: '1.0.0',
        });
      } catch (error) {
        res.status(500).json({
          status: 'Error',
          message: 'API is unhealthy',
          error: error.message,
        });
      }

}
export default healthCheck;