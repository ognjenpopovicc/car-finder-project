import Ad from "../components/Ad";

import { query, collection, where, getDocs } from "firebase/firestore";

import { db } from "../firebase";

import { useLoaderData } from "react-router-dom";

const MyAds = () => {
  const data = useLoaderData();

  return data.map((doc) => <Ad key={doc.id} data={doc} use="myads" />);
};

export const loader = async (currentUser) => {
  const q = query(
    collection(db, "ads"),
    where("userId", "==", currentUser.uid)
  );

  const docs = await getDocs(q);

  let ads = [];

  docs.forEach((doc) => {
    ads.push({ ...doc.data(), id: doc.id });
  });

  return ads;
};

export default MyAds;
