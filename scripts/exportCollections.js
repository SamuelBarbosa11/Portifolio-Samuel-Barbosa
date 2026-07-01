import path from "path";

import collections from "./config/collections.js";

import { exportCollection } from "./lib/exportCollection.js";

import { writeJson } from "./lib/writeJson.js";

for (const config of collections) {
	const data = await exportCollection(config);

	await writeJson(
		path.resolve(process.cwd(), "public", `${config.collection}.json`),
		data
	);

	console.log(
		`✔ Exportado ${config.collection}.json (${data.length} registros)`
	);
}