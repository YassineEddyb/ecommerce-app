class ApiFeatures {
  constructor(obj, query) {
    this.obj = obj;
    this.query = query;
  }

  paginate() {
    const page = parseInt(this.query.page) || 1;
    const limit = parseInt(this.query.limit) || 20;

    this.obj.skip((page - 1) * limit).limit(limit);

    return this;
  }

  sort() {
    const sort = this.query.sort || "createdAt";
    const sortQuery = sort.split(",").join(" ");
    this.obj.sort(sortQuery);

    return this;
  }

  category() {
    const category = this.query.category;
    console.log(category);
    if (category) {
      this.obj.find({ categories: category });
    }

    return this;
  }
}

module.exports = ApiFeatures;
