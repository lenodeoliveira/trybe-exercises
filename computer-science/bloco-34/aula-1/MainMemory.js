class MainMemory {
    constructor () {
      this.loadedMemory = []
    }

    load (value) {
       this.loadedMemory.push(value);
    }

    get (index) {
        const indexMemory = this.loadedMemory.indexOf(index);
        return indexMemory;
    }

    clean () {
      this.loadedMemory = []
    }
  }

  module.exports = MainMemory