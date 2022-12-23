import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

/**
 * It returns an object with three properties: error, isLoaded, and items. The error property is a
 * boolean that indicates whether or not an error occurred. The isLoaded property is a boolean that
 * indicates whether or not the data has been loaded. The items property is an array of data
 * @param url - The URL to fetch data from.
 * @returns An object with three properties: error, isLoaded, and items.
 */
export function useApiRequest(url) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const fetchItems = useCallback(() => {
		axios
			.get(url)
			.then((response) => {
				setIsLoaded(true);
				setItems(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, [url]);

	useEffect(() => {
		fetchItems();
	}, [fetchItems]);

	return { error, isLoaded, items };
}
