const functional = (()=>{

  var Student = function(name,course,teacher){
    this.name = name;
    this.course = course;
    this.teacher = teacher;
  };

  let regStudents = [];

  return {
    getData: () => {
      return{
          name: document.getElementById("name").value,
          course: document.getElementById("course").value,
          teacher: document.getElementById("teacher").value
      };
    },

    test: () => {
      console.log(regStudents);
    },

    addStudent: (name,course,teacher) => {
      let newStudent = new Student(name,course,teacher);

      regStudents.push(newStudent);
      return(newStudent);
    },

    displayStudentList: (stud, name, course, teacher) => {
        var html = `<div><div class="card" ><img class="card-img-top" src="nerd.jpg" alt="Card image cap"><div class="card-body"><p class="card-text"> <strong>Name</strong>: ${name} </p><p class="card-text"> <strong>Course</strong>: ${course} </p><p class="card-text"> <strong>Teacher</strong>: ${teacher} </p></div></div></div>`
        document.querySelector(".card-container").insertAdjacentHTML("beforeend", html);
    }
  }

})();

const controller = ( (fnctrl) => {

  eventHandler = () => {
      document.getElementById("submit").addEventListener("click", registerStudent);
  };

  registerStudent = () => {
    let input, newStudent;

    input = fnctrl.getData();
    if(input.name != "" && input.course !="" && input.teacher!=""){
      newStudent = fnctrl.addStudent(input.name, input.course, input.teacher);
      fnctrl.displayStudentList(newStudent, newStudent.name, newStudent.course, newStudent.teacher);
    }

     else {
      document.getElementById("error").style.display = "block";
      document.getElementById("error").innerHTML = "Enter All Fields";
      setTimeout(function() {document.getElementById("error").style.display = "none"},5000);
    }
  };

  return {
    init: () => {
      console.log("App Started");
      eventHandler()
    }
  }

})(functional);

controller.init();
