import React, { useEffect, useState } from "react";

const useLoaderApps = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/Friends.json");
        const friendsData = await res.json();

        setTimeout(() => {
          setData(friendsData);
          setLoader(false);
        }, 1000);
      } catch (error) {
        console.error("Data fetch করতে সমস্যা হয়েছে:", error);
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return { data, loader };
};

export default useLoaderApps;
