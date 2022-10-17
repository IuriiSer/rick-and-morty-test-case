import { useState } from 'react';

const getLocalData = <T>(key: string): T | null => {
	const data = localStorage.getItem(key);
	if (data) return JSON.parse(data) as T;
	return null;
};

const setLocalData = <T>(key: string, data: T): void => {
	localStorage.setItem(key, JSON.stringify(data));
};

const useLocalStorage = <T>(_key: string, initData: T): [T, (initData: T) => void] => {
	const key = _key;

	const [data, setData] = useState<T>(() => {
		const storedData = getLocalData<T>(key);
		if (storedData) return storedData;
		setLocalData<T>(key, initData);
		return initData;
	});

	const setDataHandler: (newData: T) => void = (newData: T) => {
		setLocalData<T>(key, newData);
		setData(newData);
	};

	return [data, setDataHandler];
};

export default useLocalStorage;
