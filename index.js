class Myclass {
    method() {
        console.log('プロトタイプのメソッド')
    }
}
const instance = new Myclass();

const Myclassprototype = Object.getPrototypeOf(instance);
console.log(Myclassprototype === Myclass.prototype);
