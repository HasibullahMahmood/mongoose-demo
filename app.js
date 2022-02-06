const mongoose = require('mongoose');
const User = require('./user.model');

mongoose.connect(
	'mongodb://localhost/testDB',
	() => {
		console.log('DB Connected');
	},
	(e) => console.log(e)
);

const main = async () => {
	try {
		// :: FIRST WAY
		// const user = new User({
		// 	name: 'Hasibullah',
		// 	age: 25,
		// 	bestFriend: '620018131ab94840452b571d',
		// 	email: 'hasibullah@test.cin',
		// });
		// await user.save();
		// :: SECOND WAY
		// const user = await User({
		// 	name: 'hasibullah',
		// 	age: 25,
		// 	email: 'hasibullah@test.com',
		// 	address: { street: 'main str', city: 'Mugla' },
		// 	hobbies: ['Weight lifting', 'Bowling'],
		// });
		// :: UPDATE SAME USER
		// user.name = 'Safiullah';
		// await user.save();
		// console.log(user);
		// :: QUERY
		// const user = await User.findOne({ _id: '62003025b65de7ab4185cc53' }).populate('bestFriend');
		// const user = await User.where('name').equals('Hasibullah');
		// const user = await User.where('age')
		// 	.gt(20)
		// 	.where('name')
		// 	.equals('Hasibullah')
		// 	.limit(1)
		// 	.select('age')
		// 	.select('name');
		// :: METHODS
		// const user = await User.findOne({ name: 'Safiullah' });
		// console.log(user);
		// user.sayHi();
		// :: Static Methods
		// const user = await User.findByName('Safiullah').limit(1);
		// :: Query Helpers
		// const user = await User.find().byName('Safiullah').limit(1);
		// :: Virtual methods
		// const user = await User.find().byName('Safiullah').limit(1);
		// console.log(user[0].birthYear);
	} catch (error) {
		console.log(error.message);
	}
};

main();
