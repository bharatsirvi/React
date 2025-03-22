import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, SetOnlineStatus] = useState(true);
  useEffect(() => {
    console.log("useEffectHook");
    window.addEventListener("online", () => {
      SetOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      SetOnlineStatus(false);
    });
  }, []);

  console.log("renderHook");

  return onlineStatus;
};

export default useOnlineStatus;
