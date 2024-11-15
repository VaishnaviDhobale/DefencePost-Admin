import axios from "axios";

export async function uploadFile(file, apiUrl) {
  try {
    var form = new FormData();
    form.append("file", file);
    const response = await axios({
      method: "post",
      url: apiUrl,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          console.log(progress);
        }
      },
    });

    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
}
