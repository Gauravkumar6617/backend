const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dkzxqnz5m",
  api_key: "923571464164755",
  api_secret: "Q_no-WRyDV75movZZC1VqintHmo",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
