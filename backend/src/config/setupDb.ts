import {Seed} from '../model/Seed'

export const setupDb = ()=>{

	//Wipe the existing entries
	Seed.deleteMany({}).then(()=>{
		// Create the
		for(let i= 0; i<10; i++){
			const seed = new Seed({
				name: `name of number ${i}`,
				lat_name: `lat_name of number ${i}`
			})

			seed.save((err,doc)=>{
				if(err){console.error('Could not save the Seed Element')}
			})
		}
	})
}


