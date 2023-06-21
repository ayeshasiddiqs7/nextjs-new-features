import { useEffect, useState } from "react";

export const useCollection = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch("https://api.randomuser.me/");
      setUserInfo(await resp.json());
    }
    fetchData();
  }, []);

  return { userInfo: userInfo || "Loading" };
};
