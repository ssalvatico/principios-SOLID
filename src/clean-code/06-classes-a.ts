
(()=>{

    type Gender = 'M'|'F';
    

    // Formas de definir una clase

    // Forma 1
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthDate: Date;

    //     constructor(name:string, gender:Gender, birthDate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthDate = birthDate;
    //     }    
    // }


    // Forma 2
    class Person {
        constructor(
            public name:string,
            public gender:Gender, 
            public birthDate: Date
        ){}    
    }


    
    // tendría sentido que si quiero crear un usuario, tendria que extenderse de una persona
    // ya que todos los usuarios son personas
    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name:string,
            gender:Gender,
            birthDate:Date,
        ){ // Acá me tiraria un error ya que si yo creo una clase que se extiende de otra
            // debo incializar las propiedades o llamar al constructor de la otra clase
             // se hace con super()
        
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }
        // Supongamos ahora que la app crece y el usuario define el siguiente método

        checkCredentials(){
            // trabajo por detras
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory:string,
            public lastOpenFolder:string,
            email: string, 
            role: string, 
            name: string, 
            gender: Gender, 
            birthDate: Date,
        ){ // Mismo error que se resuelve con super
            super(name, email, role, gender, birthDate);
        }
    }

    // Es facil ver que la clase UserSettings es una clase que viola
    // el principio de responsabilidad unica, ya que es muy compleja y
    // hace multiples funcionalidades

    const userSettings = new UserSettings(
        '/home/usr',
        '/usr',
        'user@gmail.com',
        'admin',
        'John Doe',
        'M',
        new Date('1971-10-20')
    );

    console.log(userSettings);

})();