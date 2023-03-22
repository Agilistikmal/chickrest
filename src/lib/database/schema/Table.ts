import { Schema, model } from 'mongoose';

const TableSchema = new Schema(
	{
		table_number: {
			type: Number,
			required: true
		},
		max_people: {
			type: Number,
			required: true
		},
		booked_by: {
			type: String,
			required: false
		},
		booked_on: {
			type: [String],
			required: false
		},
		updated_at: {
			type: Date,
			required: true,
			default: Date.now
		}
	},
	{ collection: 'table' }
);

export const TableModel = model('table', TableSchema);
