//Store the selected elements the we are going to use.
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
//Toggle the show class off and on

navbutton.addEventListener('click', ()=> {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;

const courseDetails = document.getElementById("course-details");

// コースデータ例
const courses = [
  {
    subject: "WDD",
    number: 130,
    title: "Introduction to Web Design",
    credits: 3,
    certificate: "Web and Computer Programming",
    description: "Learn the basics of HTML and CSS for web development.",
    technology: ["HTML", "CSS"]
  },
  {
    subject: "WDD",
    number: 131,
    title: "Responsive Web Design",
    credits: 3,
    certificate: "Web and Computer Programming",
    description: "Build responsive, mobile-friendly websites.",
    technology: ["HTML", "CSS", "Responsive Layout"]
  },
  {
    subject: "WDD",
    number: 231,
    title: "JavaScript Programming",
    credits: 3,
    certificate: "Web and Computer Programming",
    description: "Add interactivity to websites using JavaScript.",
    technology: ["JavaScript", "DOM"]
  }
];

// モーダル表示関数
function displayCourseDetails(course) {
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();

  document.getElementById("closeModal").addEventListener("click", () => {
    courseDetails.close();
  });
}

// 各ボタンにイベント設定
document.querySelectorAll(".course-card").forEach(button => {
  button.addEventListener("click", () => {
    const course = courses.find(c => `${c.subject} ${c.number}` === button.textContent);
    if (course) {
      displayCourseDetails(course);
    }
  });
});
