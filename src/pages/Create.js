import CreateAdForm from "../components/CreateAdForm";

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const CreateAd = () => {
  return <CreateAdForm />;
};

export const action = async (
  request,
  params,
  currentUser,
  uploadFiles,
  isChange
) => {
  const data = await request.formData();
  const id = params.adId;

  const q = query(
    collection(db, "users"),
    where("userId", "==", currentUser.uid)
  );
  let user;

  const docs = await getDocs(q);

  docs.forEach((doc) => {
    user = doc.data();
  });

  const urls = await uploadFiles();

  const carData = {
    year: +data.get("year"),
    body: data.get("body"),
    fuel: data.get("fuel"),
    mark: data.get("mark"),
    power: +data.get("power"),
    volume: +data.get("volume"),
    milage: +data.get("milage"),
    euro: data.get("euro"),
    drive: data.get("drive"),
    gear: data.get("gear"),
    door: data.get("door"),
    seats: data.get("seats"),
    steering: data.get("steering"),
    ac: data.get("ac"),
    color: data.get("color"),
    interiorMaterial: data.get("interior-material"),
    interiorColor: data.get("interior-color"),
    registered: data.get("registered"),
    damage: data.get("damage"),
    change: data.get("change"),
    origin: data.get("origin"),
    vin: data.get("vin"),
    price: +data.get("price"),
    description: data.get("description"),
    ...user,
    email: currentUser.email,
  };

  if (urls !== []) {
    carData.images = [...urls];
  }

  if (!isChange) {
    await addDoc(collection(db, `ads`), {
      ...carData,
      manu: data.get("manu"),
      model: data.get("model"),
      createdAt: serverTimestamp(),
    });
  } else {
    await updateDoc(doc(db, "ads", id), carData);
  }

  return null;
};

export default CreateAd;
