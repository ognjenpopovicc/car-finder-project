import React, { useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, adress, city, phone, name) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (response.user.uid) {
      await addDoc(collection(db, `users`), {
        userId: response.user.uid,
        adress,
        city,
        phone,
        name,
      });
    }
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const changePassword = (password) => {
    return updatePassword(currentUser, password);
  };

  const changeEmail = (email) => {
    return updateEmail(currentUser, email);
  };

  const changeUserData = async (adress, city, phone, name) => {
    const q = query(
      collection(db, "users"),
      where("userId", "==", currentUser.uid)
    );

    let userId;

    const docs = await getDocs(q);

    docs.forEach((doc) => {
      userId = doc.id;
    });

    updateDoc(doc(db, "users", userId), {
      adress: adress,
      city: city,
      phone: phone,
      name: name,
      userId: currentUser.uid,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    changeEmail,
    changePassword,
    changeUserData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
