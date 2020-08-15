import axios from "axios";

const AxiosReducer = (state, action) => {
  axios.defaults.withCredentials = true;
  // const token = document.querySelector("[name=csrf-token]").content;
  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    // "X-CSRF-TOKEN": token,
  };
  switch (action.type) {
    case "GET":
      const getAxios = async () => {
        await axios.get(action.url).then(
          (res) => {
            console.log(res.data);
            return res.data;
            // this.$router.push({ path: "/" });
          },
          (error) => {
            console.log(error);
          }
        );
      };
      getAxios();
      break;

    case "POST":
      const postAxios = async () => {
        await axios.post(action.url, action.requestData).then(
          (res) => {
            console.log(res.data);
            return res.data;
            // this.$router.push({ path: "/" });
          },
          (error) => {
            console.log(error);
          }
        );
      };
      postAxios();
      break;

    case "DELETE":
      const deleteAxios = async () => {
        await axios.post(action.url, action.id).then(
          (res) => {
            console.log(res.data);
            return res.data;
            // this.$router.push({ path: "/" });
          },
          (error) => {
            console.log(error);
          }
        );
      };
      deleteAxios();
      break;

    default:
      throw new Error("アクションタイプの指定が不正です TYPE=" + action.type);
  }
};

export default AxiosReducer;
