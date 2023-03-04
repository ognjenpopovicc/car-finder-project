import SignUpForm from "../components/SignUpForm";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useLoaderData } from "react-router-dom";

const MyProfile = () => {
  const data = useLoaderData();

  return <SignUpForm data={data} />;
};

export const loader = async (currentUser) => {
  const q = query(
    collection(db, "users"),
    where("userId", "==", currentUser.uid)
  );
  let user;

  const docs = await getDocs(q);

  docs.forEach((doc) => {
    user = doc.data();
  });

  return { ...user, currentUser };
};

export default MyProfile;
