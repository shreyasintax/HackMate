const uploadFileToCloudinary = require("../utils/imageUploader");

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

exports.imageUpload = async (req, res) => {
    try {
        const file = req.imageFile;
        console.log(file);

        // Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported"
            });
        }

        const response = await uploadFileToCloudinary(file, "HackMate", 30);

        // Save entry in the database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });
        User.ima
        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}