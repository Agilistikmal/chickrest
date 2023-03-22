import { TableModel } from '$lib/database/schema/Table';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const tables = await TableModel.find();
	return {
		tables: JSON.parse(JSON.stringify(tables))
	};
}) satisfies PageServerLoad;
