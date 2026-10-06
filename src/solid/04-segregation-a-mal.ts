
(()=>{

    interface Bird {
        fly():void;
        eat():void;
        run():void;
        swim():void;
    }


    class Tucan implements Bird{
        public fly(){}
        public eat(){}
        public run(){}
        public swim(){
            throw new Error("NotImplemented");
            
        }
    }

    class HummingBird implements Bird{
        public fly(){}
        public eat(){}
        public run(){}
        public swim(){
            throw new Error("NotImplemented");
            
        }
    }

    class Penguin implements Bird {
        // ????? El pinguino esta obligado a implementar
        // el método 'fly()', cuando no puede volar
        public fly(){
            throw new Error("NotImplemented");
            
        } 
        public eat(){}
        public run(){}
        public swim(){}
    }

    class Ostrich implements Bird {
        // ????? El avestruz esta obligado a implementar
        // el método 'fly()', cuando no puede volar
        public fly(){
            throw new Error("NotImplemented");
            
        } 
        public eat(){}
        public run(){}
        public swim(){
            throw new Error("NotImplemented");
            
        }
    }




})();