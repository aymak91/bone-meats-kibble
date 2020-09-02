module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY,

    s3Bucket: process.env.BONE_MEATS_KIBBLE_PRO,
    awsAccessID: process.env.AWS_ACCESS_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};