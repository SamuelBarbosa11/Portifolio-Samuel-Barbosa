import fs from "fs/promises";
import { dirname } from "path";

export async function writeJson(path, data) {
	await fs.mkdir(dirname(path), {
		recursive: true,
	});

	await fs.writeFile(
		path,
		JSON.stringify(data, null, 2),
		"utf8"
	);
}