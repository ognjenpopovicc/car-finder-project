import AdDescription from "../components/AdDetail/AdDescription";
import AdDetails from "../components/AdDetail/AdDetails";
import AdImportant from "../components/AdDetail/AdImportant";
import AdLocation from "../components/AdDetail/AdLocation";
import AdSlider from "../components/AdDetail/AdSlider";

import { useLoaderData } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const AdPage = () => {
  const { carData } = useLoaderData();

  return (
    <>
      <AdSlider data={carData} />
      <AdImportant data={carData} />
      <AdDetails data={carData} />
      <AdDescription data={carData.description} />
      <AdLocation data={carData} />
    </>
  );
};

export const loader = async ({ params }) => {
  const id = params.resultId;
  const response = await getDoc(doc(db, "ads", id));
  const carData = response.data();

  return { carData, id };
};

export default AdPage;
