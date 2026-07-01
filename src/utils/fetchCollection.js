const COLLECTIONS_PATH = import.meta.env.BASE_URL;

export async function fetchCollection(collection) {
	const response = await fetch(
		`${COLLECTIONS_PATH}${collection}.json`,
		{
			cache: "force-cache",
		}
	);

	if (!response.ok) {
		throw new Error(`Erro ao carregar ${collection}.json`);
	}

	return response.json();
}