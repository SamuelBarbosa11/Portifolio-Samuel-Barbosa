import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

import { db, waitForAppCheck } from "../services/firebase";

export async function getCollection(
	collectionName,
	orderField = "order",
	limitValue
) {
	await waitForAppCheck();

	const constraints = [orderBy(orderField, "asc")];

	if (limitValue !== undefined) {
		constraints.push(limit(limitValue));
	}

	const q = query(collection(db, collectionName), ...constraints);

	const snapshot = await getDocs(q);

	return snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
}
