import { useLocation } from "react-router-dom";

export const useAppPath = () => {
  const path = "/" + useLocation().pathname.split("/")[1];
  return path;
};
