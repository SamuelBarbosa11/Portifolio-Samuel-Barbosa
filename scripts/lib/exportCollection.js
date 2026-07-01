import { db } from "./firebaseAdmin.js";

export async function exportCollection(config) {

	const orderField = config.orderBy ?? "order";

	const snapshot = await db
		.collection(config.collection)
		.orderBy(orderField)
		.get();

	return snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
}