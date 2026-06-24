import { useEffect, useState } from "react";

import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

import { db } from "../services/firebase";

export default function useSkills() {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadSkills() {
			try {
				const q = query(
					collection(db, "skills"),
					orderBy("order", "asc"),
					limit(20)
				);

				const snapshot = await getDocs(q);

				const skillsData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				setSkills(skillsData);
			} catch (error) {
				console.error(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		loadSkills();
	}, []);

	return {
		skills,
		loading,
		error,
	};
}
