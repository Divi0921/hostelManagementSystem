const toggleBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");
// console.log("sidebar");
toggleBtn.addEventListener("click", function () {
	// console.log("btn");
	// if (sideBar.classList.contains("show-sidebar")) {
	// 	sideBar.classList.remove("show-sidebar");
	// } else {
	// 	sideBar.classList.add("show-sidebar");
	// }
	sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
	sideBar.classList.remove("show-sidebar");
});

// dropdown menu

const create = document.querySelector(".create");
// console.log(create);
const showText = document.querySelector(".hides");
const admin = document.querySelector(".admins");
const admins = document.querySelector(".admin");
const students = document.querySelector(".students");
const student = document.querySelector(".student");
const leave = document.querySelector(".leave");
const leaves = document.querySelector(".leaves");

// console.log(showText);
create.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("hello");
	console.log(showText.classList);
	admins.classList.remove("admin-show");
	student.classList.remove("show-student");
	leaves.classList.remove("show-leaves");
	showText.classList.toggle("show-text");
});
admin.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("admin");
	student.classList.remove("show-student");
	admins.classList.toggle("admin-show");
});

students.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("student");
	admins.classList.remove("admin-show");
	student.classList.toggle("show-student");
});

leave.addEventListener("click", function (e) {
	e.preventDefault();
	// create.classList.remove("show-text");
	showText.classList.remove("show-text");
	leaves.classList.toggle("show-leaves");
});
