import { TableModel } from '$lib/database/schema/Table';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = async (event) => {
	const date = event.url.searchParams.get('date');
	const people = event.url.searchParams.get('people');

	const result = await TableModel.where('booked_on.date')
		.ne(date)
		.where('max_people')
		.gte(people as unknown as number);
	return json(result);
};
