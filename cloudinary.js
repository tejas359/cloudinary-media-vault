const cloudName = "YOUR_CLOUD_NAME";
const uploadPreset = "media_vault";

document.getElementById("uploadBtn").addEventListener("click", () => {
  cloudinary.openUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      sources: ["local", "camera"],
      multiple: true,
      resourceType: "auto"
    },
    (error, result) => {
      if (!error && result.event === "success") {
        showMedia(result.info.secure_url, result.info.resource_type);
      }
    }
  );
});

function showMedia(url, type) {
  const gallery = document.getElementById("gallery");

  if (type === "video") {
    gallery.innerHTML += `
      <video controls width="250">
        <source src="${url}">
      </video>`;
  } else {
    gallery.innerHTML += `
      <img src="${url}" width="200">`;
  }
}
