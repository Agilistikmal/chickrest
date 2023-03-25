import { TableModel } from '$lib/database/schema/Table';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	const tables = await TableModel.find();
	return {
		tables: JSON.parse(JSON.stringify(tables))
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email') as unknown as string;
		const date = data.get('date') as unknown as string;
		const time = data.get('time') as unknown as string;
		const people = data.get('people') as unknown as number;
		const id = data.get('id') as unknown as string;

		const te = await TableModel.findByIdAndUpdate(id, {
			$push: {
				booked_on: {
					email,
					date,
					time
				}
			}
		});
		console.log(te);
	}
} satisfies Actions;
