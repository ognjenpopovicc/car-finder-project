import React from "react";

import { useContext, useState } from "react";

import { collection, where, query, getDocs } from "firebase/firestore";

import { db } from "../firebase";

const QueryContext = React.createContext();

export const useQuery = () => {
  return useContext(QueryContext);
};

export const QueryProvider = ({ children }) => {
  const [loadedData, changeLoadedData] = useState([]);

  const queryCreate = async (dataEqual, dataFrom, dataTo) => {
    let data = [];
    let q = collection(db, "ads");

    Object.keys(dataEqual).forEach((key) => {
      q = query(q, where(key, "==", dataEqual[key]));
    });

    Object.keys(dataFrom).forEach((key) => {
      q = query(q, where(key, ">", dataFrom[key]));
    });

    Object.keys(dataTo).forEach((key) => {
      q = query(q, where(key, "<", dataTo[key]));
    });

    const docs = await getDocs(q);

    docs.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    changeLoadedData(data);
  };

  const value = {
    loadedData,
    queryCreate,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
