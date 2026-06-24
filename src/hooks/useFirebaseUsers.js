import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase/firebase";

function useFirebaseUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() || {};

      setUsers(Object.values(data));
    });

    return () => unsubscribe();
  }, []);

  return users;
}

export default useFirebaseUsers;