import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from '$env/static/private';

mongoose
	.connect(MONGODB_CONNECTION_STRING, {
		// @ts-ignore
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb database'))
	.catch((err: Error) => console.log(err));
