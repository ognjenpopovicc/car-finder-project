import CreateAdForm from "../components/CreateAdForm";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

import { useLoaderData } from "react-router-dom";

const ChangeAd = () => {
  const data = useLoaderData();

  return <CreateAdForm id={data.id} data={data.carData} />;
};

export const loader = async ({ params }) => {
  const id = params.adId;
  const response = await getDoc(doc(db, "ads", id));
  const carData = response.data();

  return { carData, id };
};

export default ChangeAd;
