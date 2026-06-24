import { useEffect, useState } from "react";

import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

import { db } from "../services/firebase";

export default function useProjects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadProjects() {
			try {
				const q = query(
					collection(db, "projects"),
					orderBy("order", "asc"),
					limit(20)
				);

				const snapshot = await getDocs(q);

				const projectsData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setProjects(projectsData);
			} catch (error) {
				console.error(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		loadProjects();
	}, []);

	return {
		projects,
		loading,
		error,
	};
}
