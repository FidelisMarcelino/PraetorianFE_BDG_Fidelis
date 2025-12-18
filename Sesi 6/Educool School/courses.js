const courseList = document.getElementById("courseList");

fetch("courses.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Gagal Ambil Data");
    }

    return response.json();
  })
  .then((courses) => {
    renderCourses(courses);
  })
  .catch((error) => {
    courseList.innerHTML = "<p>Gagal Memuat Data</p>";
    console.log(error);
  }
);

function renderCourses(courses) {
  courseList.innerHTML = "";

  courses.forEach((courses) => {
    const card = document.createElement("div");
    card.className = "bg-blue-200 text-md rounded";

    const taskHTML = courses.task
      .map((item) => `<li class="list-none">${item}</li>`)
      .join("");

    card.innerHTML = `
            <div class="bg-blue-300 p-2 rounded">
                <img
                    src="${courses.image}"
                    alt= "Gambar Course"
                    class= "rounded rounded-6 mb-2"
                >

                <p class="text-2xl font-bold">${courses.name}</p>
                <p class="h-16">${courses.description}</p>
            </div>

            <div class="p-2">
                <p>${taskHTML}</p>
            </div>

            <div class="mt-4, p-2">
                <hr>
                <p>Mulai dari</p>
                <p>
                    <span class="text-red-700 font-bold">Rp ${courses.price}</span>
                    <span class="text-sm">/bulan</span>
                </p>
            </div>

            <div class="flex justify-center m-2 mb-2>
                <button class="rounded bg-orange-600 text-white px-3 py-1 font-semibold hover:bg-orange-700">
                    Lihat Paket Belajar
                </button>
            </div>
        `;

    courseList.appendChild(card);
  });
}
