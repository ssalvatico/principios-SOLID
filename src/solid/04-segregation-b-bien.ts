
(()=>{

    interface Bird {
        eat():void; // Este es el único método que comparten todos
    }

    interface FlyingBird {
        fly():number;
    }

    interface RunningBird {
        run():void;
    }

    interface SwimmerBird {
        swim():void;
    }

    class Tucan implements Bird, FlyingBird{
        public eat(){} // Bird
        public fly(){ return 100; } // FlyingBird
    }

    class HummingBird implements Bird, FlyingBird{
        public eat(){} // Bird
        public fly(){ return 500; } // FlyingBird
    }

    class Penguin implements Bird, SwimmerBird {
        public eat(){} // Bird
        public swim(){} // SwimmerBird
    }

    class Ostrich implements Bird, RunningBird {
        public eat(){} // Bird
        public run(){} // RunningBird
    }

})();