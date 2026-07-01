import fs from "fs/promises";

export async function writeJson(path, data) {
	await fs.writeFile(
		path,
		JSON.stringify(data, null, 2),
		"utf8"
	);
}