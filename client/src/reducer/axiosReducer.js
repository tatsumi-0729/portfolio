import axios from "axios";

const AxiosReducer = (state = [], action) => {
  switch (action.type) {
    case "GET":
      const getAxios = async () => {
        const res = await axios.get(state.url);
        return res.data;
      };
      getAxios();
    case "POST":
      const postAxios = async () => {
        const res = await axios.post(state.url, state.requestData);
        return res.data;
      };
      postAxios();
    case "DELETE":
      const deleteAxios = async () => {
        const res = await axios.post(state.url);
        return res.data;
      };
      deleteAxios();
    default:
      throw new Error("アクションタイプの指定が不正です TYPE=" + action.type);
  }
};

export default AxiosReducer;
