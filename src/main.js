const jaime = {
    name: 'Jaime',
    age: 24,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Hacer que Jaime apruebe otro curso

//jaime.cursosAprobados.push('Curso de Responsive Design');

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
};

Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

const lenin = new Student('Lenin', 24, ['Curso de GIT', 'Curso de Frameworks y librerías']);

// Prototipos con la sintaxis de clases 
class Student2 {
    constructor({
        name,
        age,
        email, 
        cursosAprobados = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const jimmy = new Student2({
    name: 'Jimmy', 
    age: 25, 
    cursosAprobados: ['Curso de Estructura de Datos', 'Curso de ECMAScript 6+']
});

const jaime1 = {
    name: 'Jaime',
    username: 'jaimerdev',
    points: 200,
    socialMedia: {
        twitter: jaimerdev,
        instagram: jaime97gr,
        facebook: undefined
    },
    approvedCourses: [
        'Curso básico de JavaScript',
        'Curso práctico de JavaScript'
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso básico de JavaScript',
                'Curso práctico de JavaScript',
                'Curso de Responsive Design'
            ],
        },
        {
            name: 'Escuela de Videojuegos',
            courses: [
                'Curso de Introducción a la Producción de Videojuegos',
                'Curso Unreal Engine',
                'Curso de Unity 3D'
            ],
        },

    ]
};

const lenin1 = {
    name: 'Lenin',
    username: 'lenindev',
    points: 200,
    socialMedia: {
        twitter: lenindev,
        instagram: leningr,
        facebook: undefined
    },
    approvedCourses: [
        'Curso Básico de JavaScript',
        'Curso Práctico de JavaScript'
    ],
    learningPaths: [
        {
            name: 'Escuela de Desarrollo Web',
            courses: [
                'Curso básico de JavaScript',
                'Curso práctico de JavaScript',
                'Curso de Responsive Design'
            ],
        },
        {
            name: 'Escuela de Data Science',
            courses: [
                'Curso de Introducción a la Producción de Videojuegos',
                'Curso Unreal Engine',
                'Curso de Unity 3D'
            ],
        },

    ]
}

class learningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante'
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(this.studentName + '(' + this.studentRole + ')');
        console.log(this.likes + ' likes');
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = 'https://videoclasificado.com' + id;
    console.log('Reproduciendo el video' + urlSecreta);
}
function videoStop() {
    const urlSecreta = 'https://videoclasificado.com' + id;
    console.log('Video Pausado' + urlSecreta);
}


class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoStop);
    }
}
class Course {
    constructor({
        name,
        classes = [], 
        isFree = false,
        lang = 'spanish'
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    } 
    set name(nuevoNombrecito) {
        if(nuevoNombrecito === 'Curso Vago de Programación') {
            console.error('No lo hagas')
        } else {
            this._name = nuevoNombrecito;
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    isFree: true
})

cursoProgBasica.name;

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
})

const cursoPracticoHTML = new Course({
    name: 'Curso Práctico de HTML y CSS',
    lang: 'english'
})

const escuelaWeb = new learningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML
    ]
})

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        'Curso DataBusiness',
        'Curso Dataviz'
    ]
});

const escuelaVgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgBasica,
        'Curso de Unity',
        'Curso de Unreal'
    ]
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined, 
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        })
        comment.publicar();

    }
} 

const jaimito = new FreeStudent({
    name: 'Jaime',
    username: 'jaimerdev',
    email: 'jaimito@guerrero.com',
    twitter: 'jaimerdev',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ]
});

const lenincito = new ExpertStudent({
    name: 'Lenin',
    username: 'lenindev',
    email: 'lenin@guerrero.com',
    twitter: 'lenindev',
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
});

//*************************************************************+ */
//HERENCIA
class FreeStudent extends Student {
    constructor(props) {
        super(props) //palabra reservada para llamar los atributos de la clase madre
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourse.push(newCourse);
        } else {
            console.log('Lo sentimos, ' + this.name + 'solo puedes tomar cursos abiertos');
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }
    approvedCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourse.push(newCourse);
        } else {
            console.log('Lo sentimos, ' + this.name + 'solo puedes tomar cursos en inglés');
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }
    approvedCourse(newCourse) {
        this.approvedCourse.push(newCourse);
    }
}

//************************************************************************** */
//POLIMORFISMO
//Se aprovecha de la herencia para poder modificar metodos o atributos de la clase madre a convniencia

class TeacherStudent extends Student {
    constructor(props) {
        super(props)
    }
    approvedCourse(newCourse) {
        this.approvedCourse.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor'
        })
        comment.publicar();

    }
}

const Freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'Freddier',
    email: 'freddy@platzi.com',
    twitter: 'freddiervega',
});