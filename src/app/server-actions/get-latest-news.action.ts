'use server';

import { $fetchS } from '../server-api';
import { News, NewsItem } from '@/src/shared/types';

export interface IFilterNewsResponse {
	statusCode: number;
	message: string;
	data: {
		currentPage: number;
		pageCount: number;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		news: NewsItem[];
	};
}

type Params = {
	locale: string;
};

export async function getLatestNewsAction(
	params: Params
): Promise<IFilterNewsResponse | undefined> {
	try {
		const limit = 34;
		const response = await $fetchS(`news/latest?limit=${limit}`, {
			headers: {
				'Accept-Language': params.locale
			}
		});
		if (!response.ok) {
			console.error('API returned non-OK status:', response.status);
			return undefined;
		}
		const data = (await response.json()) as IFilterNewsResponse;
		return data;
	} catch (err) {
		console.error('Fetch failed:', err);
		return undefined;
	}
}
