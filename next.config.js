require('dotenv').config();

module.exports = {
    env: {
        MONGODB_URI:process.env.MONGODB_URI,
        MONGODB_DB:process.env.MONGODB_DB,
        CLOUDINARY_URL:process.env.CLOUDINARY_URL,
        TOKEN_SECRET:process.env.TOKEN_SECRET,
        SESSION_SECRET:process.env.SESSION_SECRET,
    }
}
    