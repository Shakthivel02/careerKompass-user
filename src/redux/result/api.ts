import axios from "axios";
import fileDownload from "js-file-download";

const Download = (id?: string) => {
  const url = `http://localhost:4300/api/Download?id=${id}`;

  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, "result.pdf");
    });
};

export default Download;
