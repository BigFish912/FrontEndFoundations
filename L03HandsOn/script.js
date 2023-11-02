let highSchoolGrade = 11;
let yourGrade;

function updateGrade(){
    switch(highSchoolGrade){
        case 9:
            yourGrade = "Freshman";
            break;
        case 10:
            yourGrade = "Sophmore";
            break;
        case 11:
            yourGrade = "Junior";
            break;
        case 12:
            yourGrade = "Senior";
            break;
        default:
            yourGrade = "Invalid";
    }

    document.getElementById("grade").innerHTML = "You are a " + yourGrade + "!";

}

function name(){
    let firstName;

    document.getElementById("demo").innerHTML = firstName === "John" ? 'Hello John!' : 'Hello Human!';

}

updateGrade();
name();