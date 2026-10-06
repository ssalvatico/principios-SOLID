// REFACTORIZACION DEL CODIGO DE './06-classes-a'
// el objetivo es evitar de tener que mandar cada una de las
// propiedades de una clase de forma posicional,
// y mandar un objeto desestructurado para extraer
// las propiedades que me interesan



(()=>{

    type Gender = 'M'|'F';
    

    interface PersonProperties{
        name:string;
        gender:Gender; 
        birthDate: Date;
    }


    class Person {

        public birthDate:Date;
        public gender:Gender;
        public name:string;

        constructor({name,gender,birthDate}:PersonProperties){
            this.name       = name;
            this.gender     = gender;
            this.birthDate  = birthDate;
        }    
    }



    interface UserProperties{
        email:string;
        role:string;

        birthDate:Date
        gender:Gender
        name:string;
    }
    
    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor({email, role, birthDate, gender, name}: UserProperties){
            super({name, gender, birthDate});

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(){
            // trabajo por detras
            return true;
        }
    }


    interface UserSettingsProperties{
        workingDirectory:string;
        lastOpenFolder:string;
        email: string; 
        role: string; 
        name: string; 
        gender: Gender; 
        birthDate: Date;
    }

    class UserSettings extends User {
        
        public workingDirectory:string;
        public lastOpenFolder:string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email, 
            role, 
            name, 
            gender, 
            birthDate,
        } : UserSettingsProperties){
            super({name, email, role, gender, birthDate});
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder;

        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/home/usr',
        lastOpenFolder: '/usr',
        email: 'user@gmail.com',
        role: 'admin',
        name: 'John Doe',
        gender: 'M',
        birthDate: new Date('1971-10-20')
    });

    console.log(userSettings);


    // TODAVÍA NO SE APLICÓ EL PRINCIPIO DE RESPONSABILIDAD UNICA, EL CUAL VEREMOS EN EL ARCHIVO './06-classes-c'



})();