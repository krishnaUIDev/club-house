import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";

function AuthHook() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    await db
      .collection("users")
      .doc(auth?.currentUser?.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUser(documentSnapshot.data());
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getUser();
  }, [auth]);

  return user;
}

export default AuthHook;
