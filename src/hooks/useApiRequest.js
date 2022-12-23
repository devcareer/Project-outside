import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils';

/**
 * It returns an object with three properties: error, isLoaded, and items. The error property is a
 * boolean that indicates whether or not an error occurred. The isLoaded property is a boolean that
 * indicates whether or not the data has been loaded. The items property is an array of data
 * @param path - The URL to fetch data from.
 * @returns An object with three properties: error, isLoaded, and items.
 */
export function useApiGetRequest(path) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const fetchItems = useCallback(() => {
		axios
        .get(`${BASE_URL}${path}`)
			.then((response) => {
				setIsLoaded(true);
				setItems(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, [path]);

	useEffect(() => {
		fetchItems();
	}, [fetchItems]);

	return { error, isLoaded, items };
}

export function useApiPostRequest(path) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const fetchItems = useCallback(() => {
		axios
        .get(`${BASE_URL}${path}`)
			.then((response) => {
				setIsLoaded(true);
				setItems(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, [path]);

	useEffect(() => {
		fetchItems();
	}, [fetchItems]);

	return { error, isLoaded, items };
}
