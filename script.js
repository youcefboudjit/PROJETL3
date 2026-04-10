// ========= LocalStorage =========
let students = JSON.parse(localStorage.getItem("students")) || [
  { name: "Ali", note: 15, status: "Present" },
  { name: "Sara", note: 12, status: "Absent" }
];

function saveData() {
  localStorage.setItem("students", JSON.stringify(students));
}

// ========= Notification =========
function showNotification() {
  const notif = document.getElementById("notif");
  notif.style.display = "block";
  setTimeout(() => { notif.style.display = "none"; }, 2000);
}

// ========= Dark Mode =========
const toggler = document.querySelector(".theme-toggler");
if (toggler) {
  toggler.onclick = () => {
    document.body.classList.toggle("dark-theme");
  };
}
 const paymentCtx = document.getElementById('paymentChart').getContext('2d');
        new Chart(paymentCtx, {
            type: 'pie',
            data: {
                labels: ['Paid', 'Unpaid'],
                datasets: [{
                    data: [150, 50],
                    backgroundColor: ['#41f1b6', '#ff7782']
                }]
            }
        });

        // Section Occupancy Chart
        const sectionCtx = document.getElementById('sectionChart').getContext('2d');
        new Chart(sectionCtx, {
            type: 'bar',
            data: {
                labels: ['Section A', 'Section B', 'Section C', 'Section D', 'Section E'],
                datasets: [{
                    label: 'Occupancy',
                    data: [20, 15, 10, 0, 5],
                    backgroundColor: '#7380ec'
                }]
            }
        });