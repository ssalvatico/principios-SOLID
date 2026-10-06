// EN ESTE ARCHIVO APLICAREMOS EL PRINCIPIO DE RESPONSABILIDAD UNICA
// TAMBIEN PRIORIZAREMOS LA COMPOSICION FRENTE A LA HERENCIA, ES DECIR:
// tratar de evitar extensiones, ya que le agrega una capa de complejidad


(()=>{

    type Gender = 'M'|'F';
    

    interface PersonProperties{
        name:string;
        gender:Gender; 
        birthDate: Date;
    }


    // Esta clase si aplica el principio
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
    }
    

    // De alguna manera hay que eliminar el extend
    class User {

        // Esto es UNICO del usuario, no necesita ni gender, ni birthDate, ni name
        public lastAccess: Date;
        public email: string;
        public role: string;
        
        constructor({email, role}: UserProperties){

            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(){
            // trabajo por detras
            return true;
        }
    }


    // Vemos que si factorizamos, deja de ser una configuracion de usuario,
    // y se convierte en una configuracion general
    interface SettingsProperties{
        workingDirectory:string;
        lastOpenFolder:string;
    }

    // Eliminamos la extension y factorizamos
    class Settings {
        
        public workingDirectory:string;
        public lastOpenFolder:string;

        constructor({workingDirectory,lastOpenFolder} : SettingsProperties){
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder;

        }
    }

    // Ahora necesito tener una clase que tenga toda la informacion junta

    interface UserSettingsProperties{
        workingDirectory:string;
        lastOpenFolder:string;
        email: string; 
        role: string; 
        name: string; 
        gender: Gender; 
        birthDate: Date;
    }

    // Esta clase se encarga de ser la COMPOSICION de las 3 anteriores
    class UserSettings{
        public person   : Person;
        public user     : User;
        public settings : Settings;
    
        constructor({
            name, gender,birthDate,
            email, role,
            workingDirectory, lastOpenFolder,
        } : UserSettingsProperties){
            this.person = new Person({name, gender, birthDate});
            this.user = new User ({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});
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

    console.table(userSettings);

})();