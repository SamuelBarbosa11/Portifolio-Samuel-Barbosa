import { useEffect, useState } from "react";

import { fetchCollection } from "../utils/fetchCollection";

export default function useSkills() {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function load() {
			try {
				const data = await fetchCollection("skills");
				setSkills(data);
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
		skills,
		loading,
		error,
	};
}
