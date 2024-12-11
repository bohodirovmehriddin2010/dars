function tanlandi(){
    let result = document.getElementsByName('result')

    let courses = document.getElementsByName('courses')

    for (let i = 0; i < courses.length; i++) {

        if (courses[i].checked ){
            result.innertesx=
                "Siz" + courses[i].value + "course tanladingiz"
        }
    }

}