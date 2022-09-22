const jaime = {
    name: 'Jaime',
    age: 24,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log('this', this);
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(jaime));
console.log(Object.getOwnPropertyNames(jaime));
console.log(Object.entries(jaime));
console.log(Object.getOwnPropertyDescriptors);

Object.defineProperty(jaime, 'pruebaNASA', {
    value: 'extraterrestres',
    writable: false,//No vale modificar el valor
    enumerable: false,//No vale listar en el metodo .keys
    configurable: false//No vale borrar el atributo
})

Object.seal(jaime);//No podemos borrar los atributos del objeto
Object.freeze(jaime);//No podemos editar ni borrar los atributos del objeto

//****************************************************************************** */
//SHALLOW COPY 

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e'
    }
};

const obj2 = {};

for(prop in obj1) {
    obj2[prop]] = obj1[prop];
}

const obj3 = Object.assign({}, obj1)
const obj4 = Object.create({obj1)

//**************************************************************************************** */
//JSON.parse y JSON.stringify

const stringifiedComplexObj = JSON.stringify(obj1); //Convierte el objeto a un STRING
const obj2 = JSON.parse(stringifiedComplexObj);// Convierte el STRING a un objeto

//RECURSIVIDAD

// function recursiva(){
//     if(/*validación*/) {
//         /*llamados recursivos*/
//     } else {
//         /*llamados normales (sin recursividad)*/
//     }
// }

const numeritos = [1, 3, 4, 5, 5, 6];
// let numerito = 0;
// for(let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log({index, numerito});
// }

function recursiva(numbersArray) {
    if(numbersArray.length != 0) {
        const firstNumb = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();//Elimina el primer elemento del array
        recursiva(numbersArray);
    }
}

//*********************************************************************************** */
//DEEP COPY con recursividad

function isObject(subject) {
    return typeof subject == 'object';
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject) {
            //copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

//***************************************************************************************/
//ABSTRACCIÓN CON OBJETOS LITERALES Y DEEP COPY

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        intagram: undefined,
        facebook: undefined
    }
};

const jaime = deepCopy(studentBase);
// Object.defineProperty(jaime, 'name', {
//     value: 'Lenin',
//     configurable: false

// })
Object.seal(jaime);
//jaime.name = 'Jaimito';
Object.isSealed(jaime);//Verifica si todas las propiedades del objeto tienen la protección
Object.isFrozen(jaime);//Verifica si todas las propiedades del objeto tienen la protección

//**************************************************************************************/
//FACTORY PATERN Y RORO

function requiredParam(param) {
    throw new Error(param + ' es obligatorio')
}

function createStudent({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    const private = {
        '_name': name
    };

    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        get name() {
            return private['_name']
        },
        set name(newName) {
            if(newName.length != 0) {
                private['_name'] = newName
            } else {
                console.warn('Tu nombre debe tener al menos 1 caracter')
            }
            
        }
        // readName() {
        //     return private['_name'];
        // },
        // changeName(newName) {
        //     private['_name'] = newName;
        // },
    };

    // Object.defineProperty(public, 'readName', {
    //     configurable: false,
    //     writable: false
    // });
    // Object.defineProperty(public, 'changeName', {
    //     configurable: false,
    //     writable: false
    // });
    
    return public;
}

const jaime = createStudent({
    name: 'Jaime',
    age: 24,
    email: jaime.com,
    twitter: jaimer
});

//***************************************************************************************/
//DUCK TYPING

function requiredParam(param) {
    throw new Error(param + ' es obligatorio')
}

function createLearningPath({
    name = requiredParam('name'),
    courses = [];
}) {
    const private = {
        '_name': name,
        '_courses': courses
    };
    const public = {
        get name() {
            return private['_name']
        },
        set name(newName) {
            if(newName.length != 0) {
                private['_name'] = newName
            } else {
                console.warn('Tu nombre debe tener al menos 1 caracter')
            }
            
        },
        get courses() {
        return private['_courses']
        },
    };
    return public; 
}

function createStudent({
    name = requiredParam('name'),
    email = requiredParam('email'),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}) {
    const private = {
        '_name': name,
        '_learningPaths': learningPaths
    };

    const public = {
        email,
        age,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        get name() {
            return private['_name']
        },
        set name(newName) {
            if(newName.length != 0) {
                private['_name'] = newName
            } else {
                console.warn('Tu nombre debe tener al menos 1 caracter')
            }
            
        }
        get learningPaths() {
            return private['_learningPaths'];
        },
        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn('Tu LP no tiene la propiedad name');
                return;
            }

            if (!newLP.courses) {
                console.warn('Tu LP no tiene courses');
                return;
            }

            if (!isArray(newLP.courses)) {
                console.warn('Tu LP no es una lista (*de cursos)');
                return;
            }
            private['_learningPaths'] = newLP;            
        }
    };
    return public;
}

const jaime = createStudent({
    name: 'Jaime',
    age: 24,
    email: jaime.com,
    twitter: jaimer
});

jaime.learningPaths = 'Nueva ruta de aprendizaje';