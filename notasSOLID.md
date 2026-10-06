# Principios SOLID y Clean Code

Deuda Técnica: falta de calidad en el código, que genera una deuda que se cobra en costos económicos, se pierde tiempo en:  

- Mantenimientos  
- Refactorizar código  
- Comprender el código  
- Transferencia del código  

### Esquema de deuda técnica de Martin Fowler
#### Existen 4 tipos de deuda técnica:  
    
- **Imprudente deliberada**: el desarrollador actúa conscientemente de forma imprudente.  
    _"No hay tiempo, copia y pega eso de nuevo"_
- **Inadvertida**: generada por falta de conocimiento/experiencia.  
    _"¿Qué es un patrón de diseño?"_
- **Prudente deliberada**: sabemos que tenemos esa deuda, si no se "paga" a tiempo, genera "más intereses".  
    _"Tenemos que entregar rápido, después refactorizamos"_  
- **Prudente inadvertida**: nos damos cuenta de la deuda una vez que avanzamos en el proyecto.  
    _"Ahora sabemos cómo deberíamos haber hecho"_

Caer en la deuda técnica es normal y a veces inevitable. La diferencia está en el programador que entiende lo que hace y se preocupa por pagar esa deuda.

_**¿Cómo se paga una deuda técnica?**_

### Refactorización
Es un proceso que tiene como objetivo **mejorar el código sin alterar su comportamiento**, para que sea mas entendible y tolerante a cambios.  
Usualmente para que una refactorización fuerte tenga el objetivo esperado, se debe contar con **pruebas automáticas**.  
Cuando no se tienen esas pruebas, es más difícil probar que el código sigue funcionando.  

### CLEAN CODE (definiciones):

- _"Código limpio es aquel que se escribe con la intención de que otra persona (o vos en el futuro) lo entienda."_
- _"Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito."_
- _"Programar es el arte de decirle a otro humano lo que querés que la computadora haga."_

#### Estándares para nombrar variables/funciones:
    snake_case  
    camelCase  
    UpperCamelCase  

Se busca usar nombres pronunciables y expresivos.  
Ausencia de información técnica en nombres.  

 
****
 - En **booleanos**, priorizar nombrar a las variables como *afirmaciones*, así es mas fácil luego ver su valor de verdad.  
****
 - En **funciones**, los nombres deben representar acciones, y se construyen generalmente como *"verbo + sustantivo"*, y deben abstraer al usuario de la implementación.  
    - Limitar a 3 parámetros.
    - La simplicidad es fundamental, evitar funciones abstractas.
    - Priorizar funciones de pocas líneas.
    - Funciones de una sola línea sin causar complejidad.
    - Evitar 'else', por qué?
    - Priorizar el uso de la condicional ternaria.  
****
- En las **clases**, los nombres deben ser ***nombres formados por un sustantivo*** o ***frases de sustantivo***. Los nombres no deben ser demasiado genéricos, y se debe utilizar *UpperCamelCase*.  
    
    - Preguntas que el nombre de una clase debe responder para estar _bien nombrada_:
        - ¿_Qué hace_ exactamente la clase?
        - ¿_Cómo_ exactamente esta clase realiza cierta tarea?
        - ¿Hay _algo específico_ sobre su ubicación?  
            **más palabras != mejor nombre**  

    - Las clases deben tener una ***responsabilidad específica*** y bien clara, si es muy genérica,
terminará teniendo demasiadas responsabilidades y posiblemente llevará a los siguientes problemas:
        - Difícil de mantener.
        - Difícil de testear.
        - Difícil de ampliar.
        - Difícil de notar la responsabilidad de cada método.  

        Por eso se debe seguir el **_Principio de responsabilidad única_**,
que establece que las clases deben tener una responsabilidad única.  
**Priorizar la composición frente a la herencia**  
    - **Estructura de las clases:**  
        ```Propiedades
        1. Propiedades estáticas.
        2. Propiedades privadas.
        3. Propiedades públicas.
        
        Métodos
        1. Constructores estáticos.
        2. Constructor.
        3. Métodos estáticos.
        4. Métodos privados.
        5. Resto de métodos ordenados de mayor a menor importancia.
        6. Getters y setters.```
****
- Los comentarios generalmente son mal utilizados, deben ser la ***excepción, no la regla***. Si una función requiere de un comentario para ser entendida, significa que está mal programada.  
    - Deben ser ***informativos, no explicativos***. Pueden ser útiles a la hora de explicar el _por qué_ se tomo una decisión A en lugar de B.  
    - Excepción: Cuando se usan librerías de terceros, APIS, frameworks, etc. podemos encontrarnos en situaciones en las que escribir un comentario es mejor que dejar una solución compleja sin explicación.

    _**"No comentes el código mal escrito, reescríbelo."**_
****

(adicional: interface describe cómo es un objeto; class define cómo es un objeto y además qué puede hacer (comportamientos/métodos))  


### Principio DRY (Don't Repeat Yourself)
- Simplemente es evitar tener duplicidad de código.
- Simplificá las pruebas.
- Ayuda a centralizar procesos.
- Aplicar el principio DRY, generalmente nos lleva a refactorizar.  


_"Si querés ser un programador productivo, esforzate en escribir código legible"_  

### Uniformidad en el proyecto
- _Problemas similares, soluciones similares..._  
Se debe aplicar tanto en el código como en la arquitectura del proyecto.

- _Indentación_  
Se explica solo, cuestión estética y cómoda para el lector. Útil.  

## Acrónimo STUPID
#### Describe todas las prácticas y/o patrones que no debemos hacer (code smells)

_Code smell_: indicio de que algo no está bien en el código, que implicaría emplear una refactorización para corregirlo.


##### `S`ingleton: patrón singleton.
##### `T`ight Coupling: alto acoplamiento.
##### `U`nestability: código no probable (unit test).
##### `P`remature optimization: optimizaciones prematuras.
##### `I`ndescriptive naming: nombres poco descriptivos.
##### `D`uplication: duplicidad de código, no se aplica el principio DRY.
****
### Singleton:
- Ventajas:
    - Garantiza una única instancia de la clase a lo largo de toda la aplicación.
- Desventajas:
    - Vive en el contexto global (no se sabe dónde está).
    - Puede ser modificado por cualquiera y en cualquier momento.
    - No es rastreable.
    - Difícil de testear debido a su ubicación.


### Tight Coupling:  
- Desventajas:
    - Un cambio en un módulo generalmente provoca un efecto dominó en los otros módulos.
    - El ensamblaje de módulos puede requerir más tiempo y/o esfuerzo debido a la gran dependencia entre módulos.
    - Un módulo en particular puede ser más difícil de reutilizar y/o testear porque se deben incluir módulos independientes.

    #### **Lo ideal es tener bajo acoplamiento y buena cohesión.**

    **Acoplamiento**:
    - Se refiere a _cuán relacionadas o dependientes_ son dos clases/módulos entre sí.
    - En bajo acoplamiento, cambiar algo importante en una clase no debería afectar a la otra.
    - En alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podría requerir una renovación completa del sistema.

    **Cohesión**:
    - La cohesión se refiere a lo que la clase/módulo _puede hacer_,
    - Baja cohesión significa que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.
    - Alta cohesión significa que la clase se enfoca en lo que debería estar haciendo, es decir, sólo métodos relacionados con la **intención** de la clase.

### Unestability: código dificilmente testeable.
- Código con alto acoplamiento.
- Código con muchas dependencias no inyectadas.
- Dependencias en el contexto global (como un Singleton).

Se deben tener en mente los testings desde la creación del código.

### Premature Optimization:
    
Mantener abiertas las opciones retrasando la toma de desiciones nos permite darle mayor relevancia a lo que es más importante en una aplicación.

No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan añadir complejidad accidental.

**Complejidad esencial:** inherente al problema.  
**Complejidad accidental:** cuando se implementa una solución compleja a la mínima indispensable.

Generalmente tiene que haber un balance entre la complejidad esencial y la accidental.

### Indescriptive naming:
- Nombres de variables mal nombradas.
- Nombres de clases muy genéricos.
- Nombres de funciones mal nombradas.
- Ser muy específico o demasiado genérico.

### Duplication: duplicidad de código.

Hay 2 tipos de duplicidad:
- Real:
    - El código es idéntico y cumple la misma función.
    - Un cambio implicaría actualizar todo el código idéntico en varios lugares.
    - Incrementa posibilidades de error humano al olvidar una parte para actualizar.
    - Mayor cantidad de pruebas innecesarias.

- Accidental:
    - El código luce similar pero cumple funciones distintas.
    - Cuando hay un cambio, sólo hay que modificar un sólo lugar.
    - Este tipo de duplicidad se puede trabajar con parámetros u optimizaciones.
****
### Menciones honoríficas de _code smells_

- ### Inflación:

Cuando un método tiene demasiadas líneas de código.  

Esto es un problema porque usualmente siempre se agregan funcionalidades en lugar de eliminar, por lo tanto este "método enorme" se hace notar cuando ya es demasiado tarde.  

La solución es modularizar el método en muchos métodos de menor tamaño.

- ### Clases de gran tamaño.  
Esto es un problema ya que se pierde el propósito único de una clase, la cual cubre demasiadas funcionalidades juntas.  

La solución es dividir la clase en varias subclases, separando las responsabilidades. Esto evita la duplicidad de código y asegura de que cada clase cumpla con un rol específico.

- ### Obsesión primitiva:

Aparece cuando usamos demasiado `String`, `int`, `double`, `boolean`, etc. para representar conceptos que en realidad tienen ***significado propio*** en el dominio.

Aparece cuando los primitivos empiezan a cargar responsabilidades que conceptualmente pertenecen a un objeto.

- ### Lista larga de parámetros:

Más de 3 o 4 parámetros en un solo método.  

Aparece cuando la cantidad y/o la relación entre los parámetros empieza a perjudicar la comprensión y el mantenimiento del código.

Esto es un problema ya que la función empieza a ser difícil de entender, llamar y mantener.

Puede provocar:
- Dificultad de lectura: hay que mirar la definición del método para entender cada argumento.
- Errores al pasar argumentos: especialmente cuando varios tienen el mismo tipo.
- Cambios costosos: si agregás o modificás un parámetro, tenés que actualizar muchos lugares.
- Baja cohesión: varios parámetros pueden pertenecer conceptualmente a un mismo objeto.
- Difícil reutilización: una función con muchas dependencias puede ser más difícil de utilizar en otros contextos.

La solución es dividir el método en submétodos y/o introducir un objeto.
****

## Acopladores (_code smells_):
Todos los olores de este grupo contribuyen al ___acoplamiento excesivo___ entre clases, o muestran lo que sucede si el acoplamiento se reemplaza por una ___delegación excesiva___.

- ### Feature envy:

Un método que accede a los datos de otro objeto más veces que a sus propios datos.

Es un problema ya que aumenta el acoplamiento entre clases. Si una clase necesita conocer muchos detalles internos de otra, queda muy dependiente de cómo está implementada la otra clase.

La solución es una técnica habitual `Move Method`: mover el método hacia la clase cuyos datos utiliza principalmente. No siempre es favorable aplicar esta técnica.

- ### Intimidad inapropiada:

Una clase usa campos y metodos internos de otra clase.

Es un problema ya que aumenta el acoplamiento entre clases, haciéndolas difíciles de mantener.

Solución: separar los métodos para que las clases sepan lo menos posible de otras clases. Mejora la organización, simplifica el soporte, es más fácil reutilizar el código.

- ### Cadenas de mensajes:

Una función que llama a otra, que llama a otra, que llama a otra...

Esto es un problema porque el cliente depende de la navegación a lo largo de la estructura de la comunicación. Cualquier cambio en estas relaciones requiere modificarse nuevamente, o agregar un nuevo paso, o eliminar un paso.

La solución es tratar de eliminar esa cadena de comunicaciones, consiguiendo que sea más directa, eliminando dependencias.

- ### The middle man:

Una clase realiza una sola acción, la cual es delegar un trabajo a otra clase.

Puede ser el resultado de la eliminación de la cadena excesiva de mensajes.

Es un problema ya que aumenta el acoplamiento y el código que hay que atravesar sin aportar demasiado valor.

Una solución es eliminar el intermediario y hacer que el cliente hable directamente con el objeto que realmente necesita.

- ## Principios SOLID
Indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar conectados.

Tienden a solucionar los _code smells_ mencionados anteriormente.

##### `S`ingle responsibility: Responsabilidad única.
##### `O`pen and Close: Abierto y Cerrado.
##### `L`iskov Substitution:
##### `I`nterface segregation:
##### `D`ependency inversion:
****
- ### Single Responsibility
_"Nunca debería haber más de un motivo por al cual cambiar una clase o módulo."_  
`"tener una única responsabilidad" != "hacer una única cosa"`

Como detectar violaciones:
- Nombres de clases/módulos demasiado genéricos.
- Los cambios en el código suelen afectar a la clase o al módulo.
- La clase involucra múltiples capas.
- Numero elevado de importaciones.
- Cantidad elevada de métodos públicos.

- ### Open and Close
(depende mucho del contexto)  
Establece que las entidades de software (clases, módulos, métodos,etc.) deben estar *abiertas para la extensión*, pero *cerradas para la modificación*.  

La forma mas sencilla de demostrar el principio de considerar un método que hace una cosa.

Método A: Escribe en un archivo hola.txt  
_Nuevo requisito_: escribir en un archivo adios.txt

Si debo modificar el método A para poder escribir en adios.txt, está mal implementado.  
Básicamente se soluciona creando métodos dinámicos.  
Ejemplo: método B que recibe como parámetro el archivo en donde debe escribir.

El principio de Open-Close se puede lograr de otras maneras, incluso mediante el uso de la herencia o patrones de diseño de composición, como el patrón de estrategia.

Detectar violaciones:
- Los cambios normalmente afectan nuestra clase o módulo.
- Cuando una clase o módulo afecta muchas capas (presentación, almacenamiento, etc). Usualmente implica que la clase tiene demasiadas responsabilidades.

- ### Liskov Sustitution
_"Las funciones que utilicen punteros o referencias a clases base deben ser capaces de usar objetos de clases derivadas sin saberlo"._

Este principio recibe este nombre por la doctora Barbara Jane Huberman, conocida como Barbara Liskov.  

Este principio dice:  
_"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema"._  

En criollo:  
Si una clase A es extendida por una clase B, deberiamos ser capaces de sustituir cualquier instancia de A por cualquier objeto de B sin fallas.

- ### Interface Segregation
_"Los clientes no deberían estar obligados a depender de interfaces que no utilicen"._  
Ninguna clase debe ser obligada a depender de métodos o interfaces que no utiliza.  

Ejemplos de diseño:

- Mal diseño: Una interfaz Trabajador con los métodos `programar()`, `diseñar()` y `comer()`. Si un robot es un trabajador, se ve obligado a implementar `comer()`, aunque no lo necesite.

- Buen diseño: Dividirlas en `Programador`, `Disenador` y `Comedor`. El humano implementa las tres, y el robot solo implementa `Programador`.

Detectar violaciones:
- Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.

- ### Dependency Inversion
_"Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones"._

En criollo:
- Módulos de alto nivel: La lógica central de tu programa no debe conocer los detalles de clases secundarias.

- Abstracciones: Se usan interfaces o clases abstractas como un contrato intermedio.

- Detalles: Las implementaciones reales deben obedecer a estas abstracciones, nunca al revés.

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es decir, la capa de dominio.  
Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de abstracciones y no de concreciones es que aumenta su ***tolerancia al cambio***.

**_¿Por qué obtenemos más tolerancia al cambio?_**  
Cada cambio en un componente abstracto implica un cambio en su implementación.  
Al contrario, los cambios en implementaciones concretas, la mayoría de veces, no requieren cambios en las interfaces que implementa.  
En algún momento nuestro programa va a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias.

Ejemplos de diseño:
- Mal diseño: Una clase de cobro crea directamente un objeto de `ConexionMySQL`. Si cambias a mongoDB, debes modificar la clase principal.

- Buen diseño: La clase de cobro recibe una interfaz `IBaseDatos`. Puedes usar MySQL, mongoDB o datos de prueba sin cambiar el código principal.

Este principio se llama inversión de dependencias ya que a la hora de realizar cambios en el futuro, los lugares en donde se debe modificar el código son pocos.