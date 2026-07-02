import fs from "fs";

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
	// Chave de acesso em ambiente de produção
	serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else if (fs.existsSync("./scripts/config/serviceAccount.local.json")) {
	serviceAccount = JSON.parse(
		fs.readFileSync("./scripts/config/serviceAccount.local.json", "utf8")
	);
} else {
	throw new Error("Nenhuma credencial do Firebase Admin encontrada.");
}

initializeApp({
	credential: cert(serviceAccount),
});

export const db = getFirestore();
