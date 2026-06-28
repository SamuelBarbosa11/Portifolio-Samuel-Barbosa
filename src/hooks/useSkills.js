import { useEffect, useState } from "react";

import { getCollection } from "../utils/getCollection";

export default function useSkills() {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function load() {
			try {
				const data = await getCollection("skills", "order", 20);
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
