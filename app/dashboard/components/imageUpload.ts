import cloudinary from "@/utils/cloudinary";

export const ImageUpload = async (buffer: any) => {
  const data = await new Promise((reject, resolve) => {
    cloudinary.uploader
      .upload_stream({}, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      })
      .end(buffer);
  });

  console.log(data);
};
