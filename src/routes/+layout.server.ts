import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';

mongoose
	.connect(env.MONGODB_CONNECTION_STRING, {
		// @ts-ignore
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to mongodb database'))
	.catch((err: Error) => console.log(err));
