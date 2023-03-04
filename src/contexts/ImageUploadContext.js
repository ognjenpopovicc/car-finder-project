import React from "react";

import { useState, useContext } from "react";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../firebase";

import { v4 } from "uuid";

const ImageContext = React.createContext();

export const useUploadImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [filesForUpload, setFilesForUpload] = useState([]);

  const sendFile = (files) => {
    setFilesForUpload([...filesForUpload, ...files]);
  };

  const uploadFiles = async () => {
    if (filesForUpload === []) return [];

    let imageUrls = [];

    for (const file of filesForUpload) {
      const imageRef = ref(storage, `images/${file.name + v4()}`);

      const snap = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snap.ref);
      imageUrls.push(url);
    }

    setFilesForUpload([]);
    return imageUrls;
  };

  const value = {
    sendFile,
    uploadFiles,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
