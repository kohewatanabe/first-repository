class Numberwrapper {

    #value;
    constructor(value) {
        this.#value = value;
    }

    get value() {
        console.log(this.#value);
    }

    set value(newvalue) {
        this.#value = newvalue;
    }
}

const numberwrapper = new Numberwrapper(1);
numberwrapper.value;