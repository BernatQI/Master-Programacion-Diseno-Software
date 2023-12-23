class Model {

  #strings;

  constructor() {
    this.#strings = [];
    for(let string of ['Home', 'About us', 'Products', 'Offers', 'Contact'])
      this.#strings.push(string);
  }

  add(string) {
    this.#strings.push(string);
  }

  remove(index) {
    this.#strings.splice(index, 1);
  }

  get(index) {
    return this.#strings[index];
  }

  size() {
    return this.#strings.length;
  }

}

module.exports.Model = Model;