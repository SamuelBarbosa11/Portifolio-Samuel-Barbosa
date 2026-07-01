import { useEffect, useState } from "react";

import { fetchCollection } from "../utils/fetchCollection";

export default function useProjects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function load() {
			try {
				const data = await fetchCollection("projects");
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
