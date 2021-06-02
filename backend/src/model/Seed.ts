import mongoose from 'mongoose'

const SeedSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please include the seed name"],
		unique: true,
	},
	lat_name: {
		type: String,
		required: [true, "Please include the seed name"],
		unique: true,
	}
})

const Seed = mongoose.model('Seed', SeedSchema);
export {Seed}
