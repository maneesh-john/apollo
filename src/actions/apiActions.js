import http from "../utils/http";
import { SET_ERROR, SET_BACKGROUND_RESOURCES } from "./types";

export const getBackgroundResources = async () => {
  try{
    const resp = await http.get("displayapp/defaultcontent");
    const data = resp.data?.playlistItems?.map(item => item?.works?.[0]?.artFile);
    return {
      type: SET_BACKGROUND_RESOURCES,
      payload: data
    };
  } catch(err) {
    return {
      type: SET_ERROR,
      payload: "Failed to fetch data"
    };
  };
};