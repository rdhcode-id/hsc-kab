"use strict";
/*
  Dibuat Oleh: Muhammad Ridho
  Tanggal Pembuatan: 11 Februari 2024 - 14 Februari 2024
  Deskripsi: 
  Kode ini dibuat untuk memudahkan penghitungan suara caleg kabupaten pasaman barat
*/
if (!localStorage.getItem("data_tps")) {
  let data_tps = [
    {
      kecamatan: "Talamau",
      nagari: [
        "Sinuruik",
        "Talu",
        "Sungai Janiah Talu",
        "Tabek Sirah",
        "Kajai",
        "Kajai Selatan",
        "Simpang Timbo Abu",
      ].map((nama_nagari) => ({
        nama: nama_nagari,
        tps: Array.from({ length: 30 }, (_, index) => ({
          nomor_tps: index + 1,
          data_partai: [],
          total_suara_sah: 0,
          total_suara_tidak_sah: 0,
          total_suara_sah_tidak_sah: 0,
        })),
      })),
    },
    {
      kecamatan: "Pasaman",
      nagari: [
        "Aia Gadang",
        "Aia Gadang Barat",
        "Aia Gadang Timur",
        "Suko Mananti Aua Kuniang",
        "Pinaga Aua Kuniang",
        "Lubuak Landua Aua Kuniang",
        "Lembah Binuang Aua Kuniang",
        "Lingkuang Aua",
        "Lingkuang Aua Timur",
        "Lingkuang Aua Baru",
        "Lingkuang Aua Bandarajo",
        "Lingkuang Aua Jambak",
        "Lingkuang Aua Koto Dalam",
        "Lingkuang Aua Barat",
        "Lingkuang Aua Hilia",
      ].map((nama_nagari) => ({
        nama: nama_nagari,
        tps: Array.from({ length: 30 }, (_, index) => ({
          nomor_tps: index + 1,
          data_partai: [],
          total_suara_sah: 0,
          total_suara_tidak_sah: 0,
          total_suara_sah_tidak_sah: 0,
        })),
      })),
    },
  ];

  // Simpan data_partai ke local storage
  localStorage.setItem("data_tps", JSON.stringify(data_tps));
}
if (!localStorage.getItem("data_partai")) {
  let data_partai = [
    {
      nomor_urut: 1,
      nama: "PKB",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "YULHENDRI, DT. PUTIAH, S. H", suara: {} },
        { nomor_urut: 2, nama: "SAMIDAS, S.Pd", suara: {} },
        { nomor_urut: 3, nama: "GUSNELVIA", suara: {} },
        { nomor_urut: 4, nama: "RIRI NOFRIKA", suara: {} },
        { nomor_urut: 5, nama: "MERRI JHON", suara: {} },
        { nomor_urut: 6, nama: "VICTORIA ANJELINA", suara: {} },
        { nomor_urut: 7, nama: "Drs. PRAMANA YOSE, M.Si", suara: {} },
        { nomor_urut: 8, nama: "MUHAMMAD AMIN", suara: {} },
        { nomor_urut: 9, nama: "YOLANDA SARI, S.E", suara: {} },
        { nomor_urut: 10, nama: "NOFENDI", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 2,
      nama: "GERINDRA",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "H. ADRIWILZA, S.E., M.Pd., M. Si", suara: {} },
        { nomor_urut: 2, nama: "IRWANTO, DT. TALELO DIRAJO", suara: {} },
        { nomor_urut: 3, nama: "NOVI ENI RAHAYU, S. Pd", suara: {} },
        { nomor_urut: 4, nama: "TRI WAHLUYO, S.H", suara: {} },
        { nomor_urut: 5, nama: "MUHAMMAD AFDAL", suara: {} },
        { nomor_urut: 6, nama: "SANTI YULITA", suara: {} },
        { nomor_urut: 7, nama: "MURYANTO, S. Pd", suara: {} },
        { nomor_urut: 8, nama: "WAHYU RAHMADANI, S.E", suara: {} },
        { nomor_urut: 9, nama: "HESTI SEPTIA NINGSIH", suara: {} },
        { nomor_urut: 10, nama: "MUHAMAD ARIF, S.S.T", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 3,
      nama: "PDIP",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "RONAL DODYA RESTU, S.Kom., M.TI.", suara: {} },
        { nomor_urut: 2, nama: "IRAWATI", suara: {} },
        { nomor_urut: 3, nama: "CANI, S.H.", suara: {} },
        { nomor_urut: 4, nama: "SIDDIQ FAJAR BHASKORO, S.Kom.", suara: {} },
        { nomor_urut: 5, nama: "ANDI WAHYUDI", suara: {} },
        { nomor_urut: 6, nama: "DESI SUSANTI", suara: {} },
        { nomor_urut: 7, nama: "MHD. FAUZI YUSRO, S.T", suara: {} },
        { nomor_urut: 8, nama: "NOVRIADI", suara: {} },
        { nomor_urut: 9, nama: "ENI MULYANI", suara: {} },
        { nomor_urut: 10, nama: "RAHMAT DANIL", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 4,
      nama: "GOLKAR",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "ARMI DT. MUJUA BATUAH, S.Pd", suara: {} },
        { nomor_urut: 2, nama: "H. ROMMY CANDRA, S.H", suara: {} },
        { nomor_urut: 3, nama: "ELSA MARDIAN, Amd.Keb", suara: {} },
        { nomor_urut: 4, nama: "ROSDI, S.E", suara: {} },
        { nomor_urut: 5, nama: "DORI ANDIKA", suara: {} },
        { nomor_urut: 6, nama: "MERI AICHA NAULI", suara: {} },
        { nomor_urut: 7, nama: "IMRON ROFKI, S.E", suara: {} },
        { nomor_urut: 8, nama: "RIDZUL MARJUNI, S.E", suara: {} },
        { nomor_urut: 9, nama: "SRI HAMIDA", suara: {} },
        { nomor_urut: 10, nama: "JUMIRAN", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 5,
      nama: "NASDEM",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "H. YEFRIZAL, A.Md.", suara: {} },
        { nomor_urut: 2, nama: "PENDI", suara: {} },
        { nomor_urut: 3, nama: "Drh. NELLYARWISMA", suara: {} },
        { nomor_urut: 4, nama: "SURATNO, S.Pd.", suara: {} },
        { nomor_urut: 5, nama: "THEO SATRIA D, S.H", suara: {} },
        { nomor_urut: 6, nama: "MEISY FARIDA SARI", suara: {} },
        { nomor_urut: 7, nama: "SEPRAPDI SUPANDI", suara: {} },
        { nomor_urut: 8, nama: "TRI PENDRA, S. Si", suara: {} },
        { nomor_urut: 9, nama: "DIAN TRIDAYANI, A.Md.Kes", suara: {} },
        { nomor_urut: 10, nama: "RONAL AFANDI, S.T", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 6,
      nama: "BURUH",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "M. IKHWAN", suara: {} },
        { nomor_urut: 2, nama: "INDRA JELITA", suara: {} },
        { nomor_urut: 3, nama: "RIPA DASRAN", suara: {} },
        { nomor_urut: 4, nama: "SISKA ANDAYANI", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 7,
      nama: "GELORA",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "ADHADY JAMBAK PUTRA, S.T", suara: {} },
        { nomor_urut: 2, nama: "MEUTIA RIZTI", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 8,
      nama: "PKS",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "SUPRIONO, S.TP", suara: {} },
        { nomor_urut: 2, nama: "ERIK AFRIYUDA, S.E.I", suara: {} },
        { nomor_urut: 3, nama: "LIANA DESTI, S.Pd", suara: {} },
        { nomor_urut: 4, nama: "MUHAMMAD IMRA, Amd. Kep", suara: {} },
        { nomor_urut: 5, nama: "IDIL FATRA", suara: {} },
        { nomor_urut: 6, nama: "AGUSNITA TUTI ARIANTI WARUWU", suara: {} },
        { nomor_urut: 7, nama: "SEVEN BOY, S.T", suara: {} },
        { nomor_urut: 8, nama: "HASBI", suara: {} },
        { nomor_urut: 9, nama: "HERA SYAH PUTRI, S.Pd", suara: {} },
        { nomor_urut: 10, nama: "NIZAMUL HASYMY", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 10,
      nama: "HANURA",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "SYERLI PUSPITA INDAH SARI, S.H", suara: {} },
        { nomor_urut: 2, nama: "ASRIJA", suara: {} },
        { nomor_urut: 3, nama: "KUSDI, S.Ag., M.M", suara: {} },
        { nomor_urut: 4, nama: "MAHYUNITA", suara: {} },
        { nomor_urut: 5, nama: "RIVALDI", suara: {} },
        { nomor_urut: 6, nama: "DIARAMA", suara: {} },
        { nomor_urut: 7, nama: "INDRA YUSHARDI", suara: {} },
        { nomor_urut: 8, nama: "NURHAINI", suara: {} },
        { nomor_urut: 9, nama: "AKHIRUDDIN", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 12,
      nama: "PAN",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "DEDY IHRAM, S.Hut", suara: {} },
        { nomor_urut: 2, nama: "LIUSMAN", suara: {} },
        { nomor_urut: 3, nama: "NIRLAM, S.Pd", suara: {} },
        { nomor_urut: 4, nama: "FEBRI HANDOKO HARPAMA", suara: {} },
        { nomor_urut: 5, nama: "AL MUKRI", suara: {} },
        { nomor_urut: 6, nama: "YELIHELMIZA", suara: {} },
        { nomor_urut: 7, nama: "YULIARNI", suara: {} },
        { nomor_urut: 8, nama: "RAJUDDIN, S.Ag", suara: {} },
        { nomor_urut: 9, nama: "ARIANTO", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 13,
      nama: "PBB",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "Daulat HENDRI EKA PUTRA, S.E.", suara: {} },
        { nomor_urut: 2, nama: "NURMAS", suara: {} },
        { nomor_urut: 3, nama: "EFRINA DONA, S.A.P", suara: {} },
        { nomor_urut: 4, nama: "WITO SUDARMO", suara: {} },
        { nomor_urut: 5, nama: "DAFIT, S.H", suara: {} },
        { nomor_urut: 6, nama: "FITRIAH", suara: {} },
        { nomor_urut: 7, nama: "DONI ARIANTO", suara: {} },
        { nomor_urut: 8, nama: "MURNIATI", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 14,
      nama: "DEMOKRAT",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "YONDRIZAL, S.H., S.Sos., M.H.", suara: {} },
        { nomor_urut: 2, nama: "Ns. SUWAHYU, S.Kep", suara: {} },
        { nomor_urut: 3, nama: "LIZA SAFITRI", suara: {} },
        { nomor_urut: 4, nama: "YONNISAL, S.H", suara: {} },
        { nomor_urut: 5, nama: "YUHELDI, S.H.", suara: {} },
        { nomor_urut: 6, nama: "SULISTIYA NINGSIH", suara: {} },
        { nomor_urut: 7, nama: "ENDALISMAN, A.Md", suara: {} },
        { nomor_urut: 8, nama: "DASRIL, S.E.", suara: {} },
        { nomor_urut: 9, nama: "RIVA YENI", suara: {} },
        { nomor_urut: 10, nama: "YUMRIL", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 15,
      nama: "PSI",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "MUSTAPA KEMAL", suara: {} },
        { nomor_urut: 2, nama: "JAPRIL", suara: {} },
        { nomor_urut: 3, nama: "KETRIN AGUSTIN", suara: {} },
        { nomor_urut: 4, nama: "MULTAZAM", suara: {} },
        { nomor_urut: 5, nama: "DEFRI KURNIAWAN", suara: {} },
        { nomor_urut: 6, nama: "HALFIA NORA", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 16,
      nama: "PERINDO",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "HARTONO", suara: {} },
        { nomor_urut: 2, nama: "EDI SUSANTO, A.Md. ARS", suara: {} },
        { nomor_urut: 3, nama: "MUSDALIFAH", suara: {} },
        { nomor_urut: 4, nama: "MUHAMMAD JEPRIMA, S.E", suara: {} },
        { nomor_urut: 5, nama: "THAMRIN, S.H", suara: {} },
        { nomor_urut: 6, nama: "SUCI HARTINI", suara: {} },
        { nomor_urut: 7, nama: "DANDI IRWANTO", suara: {} },
        { nomor_urut: 8, nama: "MUHAMMAD IHSAN", suara: {} },
        { nomor_urut: 9, nama: "SITI AISAH", suara: {} },
        { nomor_urut: 10, nama: "AFRIMAN", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 17,
      nama: "PPP",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "WISMELNI. SK, S.P", suara: {} },
        { nomor_urut: 2, nama: "SUHAIDI, S.H", suara: {} },
        { nomor_urut: 3, nama: "ARIF, S.Kep., M.K.M", suara: {} },
        { nomor_urut: 4, nama: "HENDRIZON", suara: {} },
        { nomor_urut: 5, nama: "YULLIDA RAHMA SHINTA, S.E", suara: {} },
        { nomor_urut: 6, nama: "Drs. AMSAR, M.M", suara: {} },
        { nomor_urut: 7, nama: "ZULKIFLI HS, BA", suara: {} },
        { nomor_urut: 8, nama: "YOZA HENDRA", suara: {} },
        { nomor_urut: 9, nama: "ENDANG INDRAYANI, S.E", suara: {} },
        { nomor_urut: 10, nama: "RIFKI SAZLI", suara: {} },
      ],
      suara_partai_total: 0,
    },
    {
      nomor_urut: 24,
      nama: "UMMAT",
      url: "url.logo",
      anggota: [
        { nomor_urut: 0, nama: "SUARA PARTAI", suara: {} },
        { nomor_urut: 1, nama: "Drs. BAHARUDDIN. R, M.M", suara: {} },
        { nomor_urut: 2, nama: "JONAIDI SAFANDI", suara: {} },
        { nomor_urut: 3, nama: "SISKA HERMALA SARI", suara: {} },
        { nomor_urut: 4, nama: "ASRIL, S.H", suara: {} },
        { nomor_urut: 5, nama: "MULYADI", suara: {} },
        { nomor_urut: 6, nama: "MERI RAMADANI", suara: {} },
        { nomor_urut: 7, nama: "ZAIFI TANJUNG", suara: {} },
        { nomor_urut: 8, nama: "OYONG HAMDANI, S.Pd", suara: {} },
        { nomor_urut: 9, nama: "YOSI FEBRI, S.T.P", suara: {} },
        { nomor_urut: 10, nama: "AHDA YANREL", suara: {} },
      ],
      suara_partai_total: 0,
    },
  ];

  // Simpan data_partai ke local storage
  localStorage.setItem("data_partai", JSON.stringify(data_partai));
}
let data_tps = JSON.parse(localStorage.getItem("data_tps"));
let data_partai = JSON.parse(localStorage.getItem("data_partai"));
// Temukan index nagari Talu di dalam data_tps
const taluIndex = data_tps[0].nagari.findIndex(
  (nagari) => nagari.nama === "Talu"
);

// Jika nagari Talu ditemukan, tampilkan daftar TPS
if (taluIndex !== -1) {
  const taluTPS = data_tps[0].nagari[taluIndex].tps;

  taluTPS.forEach((tps) => {});
} else {
  console.log("Nagari Talu tidak ditemukan.");
}

// Fungsi untuk mengimput jumlah suara sah dan tidak sah per TPS
function inputSuaraPerTPS(
  kecamatanNama,
  nagariNama,
  nomorTPS,
  suaraSah,
  suaraTidakSah
) {
  let kecamatanIndex = data_tps.findIndex(
    (kecamatan) => kecamatan.kecamatan === kecamatanNama
  );
  if (kecamatanIndex !== -1) {
    let nagariIndex = data_tps[kecamatanIndex].nagari.findIndex(
      (nagari) => nagari.nama === nagariNama
    );
    if (nagariIndex !== -1) {
      let tpsIndex = data_tps[kecamatanIndex].nagari[nagariIndex].tps.findIndex(
        (tps) => tps.nomor_tps === nomorTPS
      );
      if (tpsIndex !== -1) {
        // Update total suara sah dan tidak sah per TPS
        data_tps[kecamatanIndex].nagari[nagariIndex].tps[
          tpsIndex
        ].total_suara_sah = suaraSah;
        data_tps[kecamatanIndex].nagari[nagariIndex].tps[
          tpsIndex
        ].total_suara_tidak_sah = suaraTidakSah;
        data_tps[kecamatanIndex].nagari[nagariIndex].tps[
          tpsIndex
        ].total_suara_sah_tidak_sah = suaraSah + suaraTidakSah;

        // Simpan data baru ke local storage
        localStorage.setItem("hasil_per_tps", JSON.stringify(data_tps));
        console.log(
          "Data suara per TPS berhasil diupdate dan disimpan di local storage."
        );
      } else {
        console.log("Nomor TPS tidak ditemukan.");
      }
    } else {
      console.log("Nama nagari tidak ditemukan.");
    }
  } else {
    console.log("Nama kecamatan tidak ditemukan.");
  }
}

function inputSuara(
  nomorPartai,
  nomorUrut,
  suara,
  kecamatan,
  nagari,
  nomorTps
) {
  let data_partai = JSON.parse(localStorage.getItem("data_partai"));

  let partai = data_partai.find(
    (partai) => partai.nomor_urut === parseInt(nomorPartai)
  );
  if (partai) {
    let calon = partai.anggota.find(
      (calon) => calon.nomor_urut === parseInt(nomorUrut)
    );
    if (calon) {
      let tpsData = data_tps
        .find((kec) => kec.kecamatan === kecamatan)
        .nagari.find((ngr) => ngr.nama === nagari)
        .tps.find((tps) => tps.nomor_tps === parseInt(nomorTps));
      if (tpsData) {
        if (!calon.suara[kecamatan]) calon.suara[kecamatan] = {};
        if (!calon.suara[kecamatan][nagari])
          calon.suara[kecamatan][nagari] = {};
        if (!calon.suara[kecamatan][nagari][parseInt(nomorTps)])
          calon.suara[kecamatan][nagari][parseInt(nomorTps)] = 0;
        calon.suara[kecamatan][nagari][parseInt(nomorTps)] += parseInt(suara);

        // Menghitung total suara anggota dari semua TPS
        calon.total_suara = 0;
        data_tps.forEach((kec) => {
          kec.nagari.forEach((ngr) => {
            if (
              calon.suara[kec.kecamatan] &&
              calon.suara[kec.kecamatan][ngr.nama]
            ) {
              Object.values(calon.suara[kec.kecamatan][ngr.nama]).forEach(
                (tpsSuara) => {
                  calon.total_suara += tpsSuara;
                }
              );
            }
          });
        });

        // Tambahkan suara ke suara partai
        partai.suara_partai_total += parseInt(suara);

        // Perbaharui data_partai di local storage
        localStorage.setItem("data_partai", JSON.stringify(data_partai));

        console.log("Suara berhasil disimpan.");
      }
    }
  } else {
    console.log("Partai atau calon tidak ditemukan.");
  }
}

// Mengisi pilihan kecamatan
var kecamatanSelect = document.getElementById("kecamatan");
kecamatanSelect.innerHTML = "<option value=''>Pilih Kecamatan</option>"; // Menambahkan default option
data_tps.forEach((kecamatan) => {
  var option = document.createElement("option");
  option.text = kecamatan.kecamatan;
  kecamatanSelect.add(option);
});

// Fungsi untuk mengisi pilihan nagari berdasarkan kecamatan yang dipilih
function isiNagari() {
  var kecamatanIndex = kecamatanSelect.selectedIndex;
  var nagariSelect = document.getElementById("nagari");
  nagariSelect.innerHTML = "<option value=''>Pilih Nagari</option>"; // Menambahkan default option

  if (kecamatanIndex !== 0) {
    var kecamatan = data_tps[kecamatanIndex - 1]; // Mengurangi 1 karena indeks dimulai dari 0
    kecamatan.nagari.forEach((nagari) => {
      var option = document.createElement("option");
      option.text = nagari.nama;
      nagariSelect.add(option);
    });
  }
}

// Memanggil fungsi isiNagari saat kecamatan berubah
kecamatanSelect.addEventListener("change", isiNagari);

// Mengisi pilihan nomor TPS
var nomorTPSSelect = document.getElementById("nomorTPS");
nomorTPSSelect.innerHTML = "<option value=''>Pilih TPS</option>"; // Menambahkan default option
for (var i = 1; i <= 30; i++) {
  var option = document.createElement("option");
  option.text = i;
  nomorTPSSelect.add(option);
}

// Mengisi pilihan nomor partai
var nomorPartaiSelect = document.getElementById("nomorPartai");
nomorPartaiSelect.innerHTML = "<option value=''>Pilih Partai</option>"; // Menambahkan default option
data_partai.forEach((partai) => {
  var option = document.createElement("option");
  option.text = partai.nomor_urut + " - " + partai.nama; // Menambahkan nama partai ke opsi
  nomorPartaiSelect.add(option);
});

// Fungsi untuk mengisi pilihan nomor urut calon berdasarkan partai yang dipilih
function isiNomorUrutCalon() {
  var nomorPartai = nomorPartaiSelect.value.split(" ")[0]; // Mengambil nomor urut partai dari option value
  var nomorUrutCalonSelect = document.getElementById("nomorUrutCalon");
  nomorUrutCalonSelect.innerHTML =
    "<option value='-1'>Pilih Nomor Urut</option>"; // Menambahkan default option

  var partai = data_partai.find((partai) => partai.nomor_urut == nomorPartai);
  if (partai) {
    // Tambahkan opsi suara partai pada index 0
    var optionPartai = document.createElement("option");
    optionPartai.text = partai.nama + " (SUARA PARTAI)"; // Menampilkan nama partai
    optionPartai.value = 0; // Menyimpan nilai 0 untuk suara partai
    nomorUrutCalonSelect.add(optionPartai);

    // Mengurutkan anggota partai berdasarkan nomor urut
    partai.anggota.sort((a, b) => a.nomor_urut - b.nomor_urut);

    partai.anggota.forEach((calon) => {
      if (calon.nomor_urut !== 0) {
        var option = document.createElement("option");
        option.text = calon.nomor_urut + ". " + calon.nama; // Menampilkan nama dan nomor urut calon
        option.value = calon.nomor_urut; // Menyimpan nomor urut calon sebagai nilai
        nomorUrutCalonSelect.add(option);
      }
    });
  }
}

// Memanggil fungsi isiNomorUrutCalon saat nomor partai berubah
nomorPartaiSelect.addEventListener("change", isiNomorUrutCalon);

// Memanggil fungsi isiNagari saat dokumen dimuat
document.addEventListener("DOMContentLoaded", isiNagari);

/*
    // Fungsi untuk menyimpan suara
    function simpanSuara() {
      var kecamatanIndex = kecamatanSelect.selectedIndex;
      var kecamatan = kecamatanSelect.options[kecamatanIndex].text;
      var nagari = document.getElementById("nagari").value;
      var nomorTPS = nomorTPSSelect.value;
      var nomorPartai = nomorPartaiSelect.value.split(' ')[0]; // Mengambil nomor partai dari option value
      var nomorUrutCalon = document.getElementById("nomorUrutCalon").value; // Mengambil nomor urut calon dari option value
      var suara = document.getElementById("suara").value;

      console.log("Nomor TPS:" + nomorTPS)
      console.log("Nomor Parati:" + nomorPartai)
      console.log("Kecamata:" + kecamatan)
      console.log("Nagari:" + nagari)
      console.log("Nomor Urut Calon:" + nomorUrutCalon)

      inputSuara(nomorPartai,
        nomorUrutCalon,
        suara,
        kecamatan,
        nagari,
        nomorTPS)

      // // Panggil fungsi inputSuaraPerTPS dengan nilai-nilai yang diinputkan
      // inputSuaraPerTPS(kecamatan, nagari, nomorTPS, nomorPartai, nomorUrutCalon, suara);

      // Mengatur nilai-nilai kembali ke default
      kecamatanSelect.selectedIndex = 0;
      isiNagari(); // Memanggil fungsi untuk mengisi pilihan nagari kembali ke default
      nomorTPSSelect.selectedIndex = 0;
      nomorPartaiSelect.selectedIndex = 0;
      isiNomorUrutCalon(); // Memanggil fungsi untuk mengisi pilihan nomor urut calon kembali ke default
      document.getElementById("suara").value = "0"; // Mengatur nilai suara kembali ke default
    }
*/
function validateInput() {
  var kecamatanIndex = kecamatanSelect.selectedIndex;
  var nagari = document.getElementById("nagari").value;
  var nomorTPS = nomorTPSSelect.value;
  var nomorPartai = nomorPartaiSelect.value;
  var nomorUrutCalon = document.getElementById("nomorUrutCalon").value;
  var suara = document.getElementById("suara").value;

  // Check if all inputs are filled
  if (
    kecamatanIndex !== 0 &&
    nagari !== "" &&
    nomorTPS !== "" &&
    nomorPartai !== "" &&
    nomorUrutCalon !== "" &&
    suara !== ""
  ) {
    return true;
  } else {
    alert("Harap isi semua input!");
    return false;
  }
}

function simpanSuara() {
  if (validateInput()) {
    var kecamatanIndex = kecamatanSelect.selectedIndex;
    var kecamatan = kecamatanSelect.options[kecamatanIndex].text;
    var nagari = document.getElementById("nagari").value;
    var nomorTPS = nomorTPSSelect.value;
    var nomorPartai = nomorPartaiSelect.value.split(" ")[0]; // Mengambil nomor partai dari option value
    var nomorUrutCalon = document.getElementById("nomorUrutCalon").value; // Mengambil nomor urut calon dari option value
    var suara = document.getElementById("suara").value;

    console.log("Nomor TPS:" + nomorTPS);
    console.log("Nomor Partai:" + nomorPartai);
    console.log("Kecamatan:" + kecamatan);
    console.log("Nagari:" + nagari);
    console.log("Nomor Urut Calon:" + nomorUrutCalon);

    inputSuara(nomorPartai, nomorUrutCalon, suara, kecamatan, nagari, nomorTPS);

    // Mengatur nilai-nilai kembali ke default
    kecamatanSelect.selectedIndex = 0;
    isiNagari();
    // Memanggil fungsi untuk mengisi pilihan nagari kembali ke default
    nomorTPSSelect.selectedIndex = 0;
    nomorPartaiSelect.selectedIndex = 0;
    isiNomorUrutCalon();
    // Memanggil fungsi untuk mengisi pilihan nomor urut calon kembali ke default
    document.getElementById("suara").value = "0";
    // Mengatur nilai suara kembali ke default

    refreshHalaman();
  }
}

// Fungsi untuk menampilkan hasil dalam tabel mini HTML
function cekTPSMasukPerNagari() {
  let resultHTML = "<table class='tpsForm'>";
  resultHTML +=
    "<tr><th>Kecamatan</th><th>Nagari</th><th>Total TPS</th><th>Nomor TPS</th></tr>";

  let totalTPSMasuk = 0; // variabel untuk menyimpan total TPS masuk

  // Loop melalui data TPS untuk mencetak informasi
  data_tps.forEach((kecamatan) => {
    kecamatan.nagari.forEach((nagari) => {
      let tpsMasukCount = 0;
      let tpsMasukList = []; // array untuk menyimpan nomor TPS yang sudah masuk
      nagari.tps.forEach((tps) => {
        let tpsMasuk = false;
        // Cek apakah tps sudah memiliki suara dari data_partai
        data_partai.forEach((partai) => {
          partai.anggota.forEach((calon) => {
            if (
              calon.suara[kecamatan.kecamatan] &&
              calon.suara[kecamatan.kecamatan][nagari.nama] &&
              calon.suara[kecamatan.kecamatan][nagari.nama][tps.nomor_tps]
            ) {
              tpsMasuk = true;
            }
          });
        });
        if (tpsMasuk) {
          tpsMasukCount++;
          totalTPSMasuk++; // Menambah total TPS masuk
          tpsMasukList.push(tps.nomor_tps); // Menambah nomor TPS ke dalam array
        }
      });
      resultHTML += `<tr><td>${kecamatan.kecamatan}</td><td>${
        nagari.nama
      }</td><td>${tpsMasukCount}</td><td>${formatNomorTPS(
        tpsMasukList
      )}</td></tr>`;
    });
  });

  resultHTML += `<tr><td colspan="2" align="right"><strong>Total</strong></td><td colspan="2"><strong>${totalTPSMasuk}</strong></td></tr>`;
  resultHTML += "</table>";

  // Mengatur hasil tabel ke dalam elemen dengan id "tpsMasuk"
  document.getElementById("tpsMasuk").innerHTML = resultHTML;
}

// Fungsi untuk memformat nomor TPS menjadi format yang diinginkan
function formatNomorTPS(tpsList) {
  if (tpsList.length === 0) {
    return "Belum ada TPS masuk";
  } else {
    // Menggabungkan nomor TPS dengan koma, diawali dengan teks "TPS "
    return tpsList.map((tps) => "TPS " + tps).join(", ");
  }
}

// Panggil fungsi untuk menampilkan hasil
cekTPSMasukPerNagari();
// Panggil fungsi untuk menampilkan hasil
cekTPSMasukPerNagari();

function tampilkanHasilPemilu() {
  let hasilPemiluHTML = `
<table>
  <tr>
    <th>No.</th>
    <th>Nama Partai (Suara Partai)</th>
    <th>Nama Anggota</th>
    <th>Suara Caleg</th>
  </tr>
`;
  let partaiTerbanyak = data_partai
    .sort((a, b) => b.suara_partai_total - a.suara_partai_total)
    .slice(0, 10);

  partaiTerbanyak.forEach((partai, index) => {
    let hasilSuaraAnggotaHTML = "";
    let calonTerbanyak = partai.anggota
      // .filter(anggota => anggota.nomor_urut !== 0) // Filter hanya anggota, bukan suara partai
      .sort((a, b) => {
        let totalSuaraA = hitungTotalSuaraAnggota(a);
        let totalSuaraB = hitungTotalSuaraAnggota(b);
        return totalSuaraB - totalSuaraA;
      });

    calonTerbanyak.forEach((anggota, calonIndex) => {
      let totalSuaraAnggota = hitungTotalSuaraAnggota(anggota);
      if (totalSuaraAnggota > 0) {
        hasilSuaraAnggotaHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${partai.nama} (${partai.suara_partai_total} Suara)</td>
        <td> ${anggota.nama} </td>
        <td>${totalSuaraAnggota}</td>
      </tr>
    `;
      }
    });

    hasilPemiluHTML += hasilSuaraAnggotaHTML;
  });

  hasilPemiluHTML += `</table>`;

  document.getElementById("hasilPemilu").innerHTML = hasilPemiluHTML;
}

function hitungTotalSuaraAnggota(anggota) {
  let totalSuaraAnggota = 0;
  data_tps.forEach((kecamatan) => {
    kecamatan.nagari.forEach((nagari) => {
      nagari.tps.forEach((tps) => {
        if (
          anggota.suara[kecamatan.kecamatan] &&
          anggota.suara[kecamatan.kecamatan][nagari.nama] &&
          anggota.suara[kecamatan.kecamatan][nagari.nama][tps.nomor_tps] > 0
        ) {
          totalSuaraAnggota +=
            anggota.suara[kecamatan.kecamatan][nagari.nama][tps.nomor_tps];
        }
      });
    });
  });
  return totalSuaraAnggota;
}

tampilkanHasilPemilu();

// Fungsi untuk menghapus semua data yang tersimpan di local storage
function hapusSemuaDataLocalStorage() {
  localStorage.clear();
  refreshHalaman();
}

// Fungsi untuk merefresh halaman
function refreshHalaman() {
  location.reload();
}

function exportToExcel() {
  const wb = XLSX.utils.book_new();

  // Create worksheets
  const tpsWS = XLSX.utils.aoa_to_sheet(buildTPSArray(data_tps));
  const partaiWS = XLSX.utils.aoa_to_sheet(buildPartaiArray(data_partai));

  // Add worksheets to workbook
  XLSX.utils.book_append_sheet(wb, tpsWS, "Data TPS");
  XLSX.utils.book_append_sheet(wb, partaiWS, "Data Partai");

  // Save the Excel file
  XLSX.writeFile(wb, "hasil-hsc.xlsx");
}

function buildTPSArray(tpsData) {
  let tpsArray = [
    [
      "Kecamatan",
      "Nagari",
      "Nomor TPS",
      "Data Partai",
      "Total Suara Sah",
      "Total Suara Tidak Sah",
      "Total Suara Sah dan Tidak Sah",
    ],
  ];

  tpsData.forEach((kecamatan) => {
    kecamatan.nagari.forEach((nagari) => {
      nagari.tps.forEach((tps) => {
        tpsArray.push([
          kecamatan.kecamatan,
          nagari.nama,
          tps.nomor_tps,
          JSON.stringify(tps.data_partai),
          tps.total_suara_sah,
          tps.total_suara_tidak_sah,
          tps.total_suara_sah_tidak_sah,
        ]);
      });
    });
  });

  return tpsArray;
}

function buildPartaiArray(partaiData) {
  let partaiArray = [
    [
      "Nomor Urut",
      "Nama Partai",
      "URL",
      "Nomor Urut Anggota",
      "Nama Anggota",
      "Suara Anggota",
      "Suara Partai Total",
    ],
  ];

  partaiData.forEach((partai) => {
    partai.anggota.forEach((anggota) => {
      partaiArray.push([
        partai.nomor_urut,
        partai.nama,
        partai.url,
        anggota.nomor_urut,
        anggota.nama,
        anggota.total_suara,
        partai.suara_partai_total,
      ]);
    });
  });

  // Urutkan berdasarkan nomor partai dan nomor urut anggota
  partaiArray.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]; // Urutkan berdasarkan nomor partai
    } else {
      return a[3] - b[3]; // Jika nomor partai sama, urutkan berdasarkan nomor urut anggota
    }
  });

  return partaiArray;
}
