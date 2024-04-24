const admin = {
  userName: 'admin',
  password: 'admin123',
  postedCourses: [],
  registeredStudents: [],
};

const post_submit = document.querySelector('.post_submit');

post_submit.addEventListener('click', function (e) {
  e.preventDefault();
  const obj = {
    name: document.querySelector('.course_name').value,
    schedule: document.querySelector('.schedule').value,
  };
  admin.postedCourses.push(obj);
  console.log(admin.postedCourses);
  document.querySelector('.course_name').value = '';
  document.querySelector('.schedule').value = '';
  alert('course posted successfully');
  updateCourses();
  viewCourses();
});

const old_name = document.querySelector('.old_name');
const old_schedule = document.querySelector('.old_schedule');
const new_name = document.querySelector('.new_name');
const new_schedule = document.querySelector('.new_schedule');

const modify_submit = document.querySelector('.modify_submit');
modify_submit.addEventListener('click', function (e) {
  e.preventDefault();
  admin.postedCourses.forEach(function (obj) {
    if (obj.name === old_name.value && obj.schedule === old_schedule.value) {
      obj.name = new_name.value;
      obj.schedule = new_schedule.value;
      old_name.value = '';
      old_schedule.value = '';
      new_name.value = '';
      new_schedule.value = '';
    }
  });
  updateCourses();
  viewCourses();
});

const course_name_delete_admin = document.querySelector('.course_name_delete');
const course_schedule_delete_admin = document.querySelector(
  '.course_schedule_delete'
);
const delete_submit = document.querySelector('.delete_submit');
delete_submit.addEventListener('click', function (e) {
  e.preventDefault();
  admin.postedCourses.forEach(function (obj) {
    if (
      obj.name === course_name_delete_admin.value &&
      obj.schedule === course_schedule_delete_admin.value
    ) {
      const index = admin.postedCourses.indexOf(obj);
      admin.postedCourses.splice(index, 1);
      course_name_delete_admin.value = '';
      course_schedule_delete_admin.value = '';
    }
  });
  updateCourses();
  viewCourses();
  alert('course deletd succcessfully');
});

const listOfCoursesPosted = document.querySelector('.listOfCoursesPosted');
function updateCourses() {
  listOfCoursesPosted.classList.remove('hidden');
  listOfCoursesPosted.innerHTML =
    'below is the list of courses listed <br><br>';
  admin.postedCourses.forEach(function (obj) {
    const html = `<table>
    <tr>
      <td style="border: 2px solid black; width: 100px;">${obj.name}</td>
      <td style="border: 2px solid black; width: 100px;">${obj.schedule}</td>
    </tr>
  </table>`;
    listOfCoursesPosted.insertAdjacentHTML('beforeend', html);
  });
}

const registered = document.querySelector('.registered');
const registered_display = document.querySelector('.registered_display');
const registered_submit = document.querySelector('.registered_submit');
const registration_view = document.querySelector('.registration_view');
registered_submit.addEventListener('click', function (e) {
  registered_display.innerHTML = '';
  registered_display.classList.remove('hidden');
  e.preventDefault();
  const html = `course name is ${registration_view.value} and registered students are <br>`;
  registered_display.insertAdjacentHTML('beforeend', html);
  admin.registeredStudents.forEach(function (obj) {
    if (obj.courseName === registration_view.value) {
      const html = `<table>
      <td style="border: 2px solid black; width: 100px;">${obj.studentName}</td>
    </table>`;
      registered_display.insertAdjacentHTML('beforeend', html);
    }
  });
});

const view = document.querySelector('.view');
const view_courses = document.querySelector('.view_courses');

function viewCourses() {
  view.innerHTML = 'below is the list of courses listed <br>';
  admin.postedCourses.forEach(function (obj) {
    const html = `
    <table>
  <td style="border: 2px solid black; width: 100px;">${obj.name}</td>
  <td style="border: 2px solid black; width: 100px;">${obj.schedule}</td>
</table>
    `;
    view.insertAdjacentHTML('beforeend', html);
  });
}
viewCourses();

const register_submit = document.querySelector('.register_submit');

register_submit.addEventListener('click', function (e) {
  e.preventDefault();
  const student_name_register = document.querySelector(
    '.student_name_register'
  );
  const course_name_register = document.querySelector('.course_name_register');
  const course_schedule_register = document.querySelector(
    '.course_schedule_register'
  );
  const obj = {
    studentName: student_name_register.value,
    courseName: course_name_register.value,
    courseSchedule: course_schedule_register.value,
  };
  admin.registeredStudents.push(obj);
  console.log(admin.registeredStudents);
  student_name_register.value = '';
  course_name_register.value = '';
  course_schedule_register.value = '';
});

const registration_delete_submit = document.querySelector(
  '.registration_delete_submit'
);
registration_delete_submit.addEventListener('click', function (e) {
  e.preventDefault();

  const student_name_delete = document.querySelector(
    '.student_name_delete'
  ).value;
  const course_name_delete = document.querySelector(
    '.course_name_delete'
  ).value;
  const course_schedule_delete = document.querySelector(
    '.course_schedule_delete'
  ).value;
  console.log(
    'Values to delete:',
    student_name_delete,
    course_name_delete,
    course_schedule_delete
  );
  admin.registeredStudents.forEach(function (ele, index, arr) {
    if (
      ele.studentName === student_name_delete &&
      ele.courseName === course_name_delete &&
      ele.courseSchedule === course_schedule_delete
    ) {
      arr.splice(index, 1);
      console.log(
        'Values to delete:',
        student_name_delete,
        course_name_delete,
        course_schedule_delete
      );
    }
  });
  console.log(admin.registeredStudents);
});

const pay_submit = document.querySelector('.pay_submit');
const pay_display = document.querySelector('.pay_display');
const student_name_pay = document.querySelector('.student_name_pay');

pay_submit.addEventListener('click', function (e) {
  pay_display.innerHTML = `<img src="QR code.jpg" alt="QR code" height="300px"><br><br>`;
  let count = 0;
  admin.registeredStudents.forEach(function (obj) {
    if (obj.studentName === student_name_pay.value) {
      count++;
      console.log(obj.studentName);
    }
  });

  e.preventDefault();
  pay_display.classList.remove('hidden');
  const html = `<p style="color: red; font-size: 32px;">
  ${student_name_pay.value} has to pay ${100 * count}
  </p>`;
  pay_display.insertAdjacentHTML('beforeend', html);
});

// implementing login

const adminDiv = document.querySelector('.admin');
const studentDiv = document.querySelector('.student');

function loginAdmin() {
  adminDiv.classList.remove('hidden');
  studentDiv.classList.add('hidden');
}

function loginStudent() {
  studentDiv.classList.remove('hidden');
  adminDiv.classList.add('hidden');
}
const login__btn = document.querySelector('.login__btn');
const login__input__user = document.querySelector('.login__input__user');
const login__input__password = document.querySelector(
  '.login__input__password'
);

const stu = /student\d/;
const pass = /student(11|22|33|44|55|66|77|88|99)/;

login__btn.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    login__input__user.value === 'admin' &&
    login__input__password.value === 'admin123'
  ) {
    loginAdmin();
    login__input__user.value = '';
    login__input__password.value = '';
  }

  if (
    login__input__user.value.match(stu) &&
    login__input__password.value.match(pass)
  ) {
    loginStudent();
    login__input__user.value = '';
    login__input__password.value = '';
  }
});
