import axios from "axios";
import fileDownload from "js-file-download";

const Download = (e: any) => {
  e.preventDefault();
  const url = "http://localhost:4300/api/";

  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, "result.pdf");
    });
};

export default Download;
