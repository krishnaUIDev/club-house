import { useState, useEffect } from "react";
import { auth, db } from "../../firebase";

function AuthHook() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    await db
      .collection("users")
      .doc(auth?.currentUser?.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUser(documentSnapshot.data());
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUser();
  }, [auth, db]);

  return user;
}

export default AuthHook;
