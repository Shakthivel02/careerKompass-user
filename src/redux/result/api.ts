import axios from "axios";
import fileDownload from "js-file-download";
import { BASEURL } from "../../services";

const Download = (id?: string) => {
  const url = `${BASEURL}Download?id=${id}`;

  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, "result.pdf");
    });
};

export default Download;
