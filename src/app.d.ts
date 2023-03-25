// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

export type Table = {
	_id: string;
	table_number: number;
	max_people: number;
	booked_on: TableBookedOn[];
};

export type TableBookedOn = {
	email: string;
	date: string;
	time: string;
};
