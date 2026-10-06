

type Size = ''|'S'|'M'|'L';

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){
    }
    isProductReady():boolean {
        for(const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if(this[key].length <= 0) throw new Error(`${key} is empty`);
                    break;                
                case 'number':
                    if(<number><unknown>this[key] <= 0) throw new Error(`${key} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} not valid!`);
            
            }
        }
        return true;
    }
    toString(){
        //no dry, cada vez que viene una propiedad, duplico el código
        // if(this.name.length <= 0)   throw new Error("Name is empty");// estas validaciones
        // if(this.price <= 0)         throw new Error("Price is zero");// tienen que estar
        // if(this.size.length <= 0)   throw new Error("Size is empty");// en otro lado

        if(!this.isProductReady()) return;
        return `${this.name} (${this.price}, ${this.size})`;        
    }
}

(()=>{

    const bluePants = new Product('Blue Large Pants', 10, 'L');

    console.log(bluePants.toString());

})();