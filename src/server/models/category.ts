import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
	id: { type: String, required: true, unique: true },
	name: { type: String, required: true },
});

// Create new todo document
categorySchema.statics.create = function (payload) {
	const todo = new this(payload);
	return todo.save();
};

// Find All
categorySchema.statics.findAll = function () {
	return this.find({});
};

// Find One by Id
categorySchema.statics.findOneById = function (id) {
	return this.findOne({ id });
};

// Update by Id (return value)
categorySchema.statics.updateById = function (id, payload) {
	return this.findOneAndUpdate({ id }, payload, { new: true });
};

// Delete by Id
categorySchema.statics.deleteById = function (id) {
	return this.deleteOne({ id });
};

const Category = mongoose.model('Category', categorySchema);
export default Category;
