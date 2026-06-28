import { useEffect, useState } from "react";

import { getCollection } from "../utils/getCollection";

export default function useProjects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function load() {
			try {
				const data = await getCollection("projects", "order", 20);
				setProjects(data);
			} catch (error) {
				console.error(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		load();
	}, []);

	return {
		projects,
		loading,
		error,
	};
}
