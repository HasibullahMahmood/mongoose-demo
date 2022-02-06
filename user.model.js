const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		// custom validate
		validate: {
			validator: (v) => v.length > 3,
			message: (props) => `${props.value} is too short`,
		},
	},
	age: {
		type: Number,
		min: 1,
		max: 150,
		required: true,
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		minlength: 5,
		maxLength: 25,
	},
	createdAt: {
		type: Date,
		default: () => new Date(),
		immutable: true, // never allow changes
	},
	updatedAt: Date,
	// bestFriend: mongoose.SchemaTypes.ObjectId,
	bestFriend: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'users',
	},

	hobbies: [String],
	address: {
		street: String,
		city: String,
	},
});

// arrow function won't work
userSchema.methods.sayHi = function () {
	console.log(`Hi, my name is ${this.name}`);
};

// can't chain this method with others
userSchema.statics.findByName = function (name) {
	return this.where('name').equals(new RegExp(name, 'i'));
};

// can chain this method with others
userSchema.query.byName = function (name) {
	return this.where('name').equals(new RegExp(name, 'i'));
};

// virtual methods
userSchema.virtual('birthYear').get(function () {
	return new Date().getFullYear() - this.age;
});

// middleware -> save, validate, remove
userSchema.pre('save', function (next) {
	this.updatedAt = Date.now();
	next();
});

userSchema.post('save', function (doc, next) {
	doc.sayHi();
	next();
});
module.exports = mongoose.model('users', userSchema);
