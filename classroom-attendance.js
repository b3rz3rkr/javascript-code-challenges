{
    const classroom1 = {
        hasTeachingAssistant: true,
        list: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas']
    }, classroom2 = {
        hasTeachingAssistant: false,
        list: ['Serhiy', 'Lukas', 'Roman', 'John', 'Lisa', 'Helga']
    };

    function getStudents(classroom) {
        if (true === classroom.hasTeachingAssistant) {
            return [...classroom.list].slice(2);
        }
        return [...classroom.list].slice(1);
    }

    const studentsList1 = getStudents(classroom1);
    console.log(studentsList1);

    const studentsList2 = getStudents(classroom2);
    console.log(studentsList2);

}