const cloudinary = require("cloudinary").v2;

exports.uploadFileToCloudinary = async (file, folder, quality) => {
    try {
        const options = { folder };

        if (quality) {
            options.quality = quality;
        }
        options.resource_type = "auto"
        const response = await cloudinary.uploader.upload(file.tempFilePath, options);
        return response;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        throw error; // Propagate the error to the calling function
    }
}