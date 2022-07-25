// script untuk menghubungkan form dengan google spreadsheets
const scriptURL = "https://script.google.com/macros/s/AKfycbyf7C6nCD_e_gHCmSEIzt_aPbxQR1N2A9dRHkS8ajXRpewphNErBnPgECh6iO9xq4Bw/exec";
const form = document.forms["sulthan-contact-form"];
const btnKirim = document.querySelector(".kirim");
const btnLoading = document.querySelector(".loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading
  btnLoading.classList.toggle("loading");
  btnKirim.classList.toggle("kirim");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("loading");
      btnKirim.classList.toggle("kirim");

      //   tampilkan alert konfirmasi
      alert("Terima kasih!! pesan Anda sudah terkirim.");

      //   reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
