import { ref, set } from "firebase/database";
import { db } from "./firebase";

export const saveLocation = async (userId, location) => {
  try {
    await set(ref(db, `users/${userId}`), {
      id: userId,
      lat: location.lat,
      lng: location.lng,
      accuracy: location.accuracy,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Firebase Error:", error);
  }
};