class ApiFeatures {
  constructor(obj, query) {
    this.obj = obj;
    this.query = query;
  }

  paginate() {
    const page = parseInt(this.query.page) || 1;
    const limit = parseInt(this.query.limit) || 10;

    this.obj.skip((page - 1) * limit).limit(limit);

    return this;
  }

  // search() {
  //   let query = this.query.q;
  //   if (query) {
  //     this.obj.find([
  //       {
  //         $or: [{ title: { $regex: query } }],
  //       },
  //     ]);
  //   }
  // }

  sort() {
    const sort = this.query.sort || "createdAt";
    const sortQuery = sort.split(",").join(" ");
    if (this.obj.sort) this.obj.sort(sortQuery);

    return this;
  }

  category() {
    let category = this.query.category;
    if (category && this.obj.find) {
      category = category.split(",");
      this.obj.find({ category: { $in: category } });
    }

    return this;
  }

  gender() {
    let gender = this.query.gender;
    if (gender) {
      gender = gender.split(",");
      this.obj.find({ gender: { $in: gender } });
    }

    return this;
  }

  size() {
    let size = this.query.size;
    if (size && this.obj.find) {
      size = size.split(",");
      // console.log(size);
      this.obj.find({ size: { $in: size } });
    }

    return this;
  }

  price() {
    let price = this.query.price;
    if (price && this.obj.find) {
      price = price.split(",");
      this.obj.find({
        price: { $gt: parseInt(price[0]), $lt: parseInt(price[1]) },
      });
    }

    return this;
  }
}

module.exports = ApiFeatures;
