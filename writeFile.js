const fs = require("node:fs");

fs.writeFile(
  "biodata.txt",
  "Hello, perkenalkan saya Allifvia putri azzahra saat ini saya kelas XI TJKT 2, Alamat rumah saya kota Bekasi, RT.001/RW.001, Cimuning, Kec. Mustika Jaya, Jawa Barat 17155, Usia saya saat ini 16 tahun",
  function (error) {
    if (error) {
      console.error("Terjadi Error", error);
    } else {
      console.log("File bisa dibuat");
    }
  }
);
