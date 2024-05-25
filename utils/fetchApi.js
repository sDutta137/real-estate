import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export async function fetchPropertiesById(id) {
  const propertiesCollection = collection(db, "properties");
  const propertiesSnapshot = await getDocs(propertiesCollection);

  const property = propertiesSnapshot.docs.find((doc) => doc.id === id);

  return { id: property.id, ...property.data() };
}

export async function fetchPropertiesForSale() {
  try {
    const propertiesCollection = collection(db, "forSale");
    const propertiesSnapshot = await getDocs(propertiesCollection);

    const properties = propertiesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return properties;
  } catch (error) {
    console.error("Failed to fetch properties for sale:", error);
    return [];
  }
}

export async function fetchPropertiesForRent() {
  try {
    const propertiesCollection = collection(db, "rentals");
    const propertiesSnapshot = await getDocs(propertiesCollection);

    const properties = propertiesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return properties;
  } catch (error) {
    console.error("Failed to fetch properties for rent:", error);
    return [];
  }
}
