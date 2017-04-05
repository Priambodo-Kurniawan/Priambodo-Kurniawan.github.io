var VariabelPertama = [
	"lagi asyik mancing ikan",
	"lagi menyisir rambut",
	"lagi tidur",
	"lagi mandi",
	"lagi asyik pacaran",
	"lagi minum es teh",
	"lagi pake celana",
	"lagi asik nyanyi",
	"lagi dorong motor",
	"lagi ngintip orang mandi"
]

var VariabelKedua = [
	"aku digoyang goyang",
	"aku ditagih utang",
	"aku digendong",
	"aku dicium",
	"aku diceburin kali sama",
	"aku ditraktir",
	"aku dilempar tahu sama",
	"aku dipentung",
	"aku dicariin",
	"aku dipelototin"
]

var VariabelKetiga = [
	"Pak Lurah",
	"ibu kosku",
	"Satpol PP",
	"tukang sayur",
	"tukang becak",
	"anak kecil ga pake baju",
	"tukang kredit",
	"dukun bayi",
	"maling kambing",
	"orang ganteng"
]

var data = [VariabelPertama, VariabelKedua, VariabelKetiga];


function validatePhone() { //validasi nomer telepon
	var phone = document.getElementById("phoneNumber").value;
	if (phone.length == 0) {
		producePrompt("Tulis Nomor Teleponmu", "phonePrompt", "red");
		return false;
	}
	if (!phone.match(/^[0-9]{11,}$/)){
		producePrompt("Nomor Tidak valid", "phonePrompt", "red");
		return false;
	}
	producePrompt("Nomor Valid", "phonePrompt", "green");
	return true;
}

function validateTanggalLahir() { //validasi tanggal lahir
	var tglLahir = document.getElementById("TanggalLahir").value;
	if (tglLahir.length == 0) {
		producePrompt("Tanggal Lahirmu", "tglPrompt", "red");
		return false;
	}
	if (!tglLahir.match(/^([1-9]|[12]\d|3[0-1])$/)){
		producePrompt("Format: dd", "tglPrompt", "red");
		return false;
	}
	producePrompt("tgl Valid", "tglPrompt", "green");
	return true;
}

function validateBulanLahir() { // validasi bulan lahir
	var blnLahir = document.getElementById("BulanLahir").value;
	if (blnLahir.length == 0) {
		producePrompt("bulan Lahirmu", "blnPrompt", "red");
		return false;
	}
	if (!blnLahir.match(/^([1-9]|[0]\d|1[0-2])$/)){
		producePrompt("Format: mm", "blnPrompt", "red");
		return false;
	}
	producePrompt("bln Valid", "blnPrompt", "green");
	return true;
}

function validateTahunLahir() { //validasi tahun lahir
	var thnLahir = document.getElementById("TahunLahir").value;
	if (thnLahir.length == 0) {
		producePrompt("Tahun Lahirmu", "thnPrompt", "red");
		return false;
	}
	if (!thnLahir.match(/^[0-9]{4}$/)){
		producePrompt("Format: yyyy", "thnPrompt", "red");
		return false;
	}
	producePrompt("thn Valid", "thnPrompt", "green");
	return true;
}

function validateNama() { //validasi nama
	var nama = document.getElementById("Nama").value;
	if (nama.length == 0) {
		producePrompt("Tulis Namamu", "namaPrompt", "red");
		return false;
	}
	producePrompt("Hallo " + nama, "namaPrompt", "green");
	return true;
}

function producePrompt(message, promptLocation, color) { //alert message
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

function jsShow(id) { //show element
	document.getElementById(id).style.display="block";
}

function jsHide(id) { //hide element
	document.getElementById(id).style.display="none";
}
function addClass(id) { // add class
	var el = document.getElementById(id);
	el.className = 'open';
}

function removeClass(id) { // remove class
	var el = document.getElementById(id);
	el.className = 'close';
}

function printVariabel(variabel, id){
	for (var i = 0; i<variabel.length; i++){
		document.getElementById(id).innerHTML +=
    	i + ' = ' +
   	 	variabel[i] + '. <br/>'
    }
}


// n Angka Terakhir
function AngkaTerakhir(input, n){
	input = input.substring(input.length-n).split('');
	for (var i=0; i<n; i++) {
	  	input[i] = parseInt(input[i], 10);
		return input;
	}
}

// menggabung rangkaian cerita dari Angka terakhir
var Angka = function(input, id){
  this.angka1 = input[0];
  this.angka2 = input[1];
  this.angka3 = input[2];
  var VariabelKeempat = VariabelPertama[this.angka2].split(' ').slice(1).join(' '); // variable ke-4
  this.cerita1 = function(id){
    document.getElementById(id).innerHTML =
      'Cerita dimulai dari aku yang ' + 
      VariabelPertama[this.angka1] + '; tanpa tau apa-apa, ' + 
      VariabelKedua[this.angka2] + ' ' + 
      VariabelKetiga[this.angka3] + '.' +
      ' Yang lebih menyebalkan, si ' + 
      VariabelKetiga[this.angka3] + 
      ' ini, punya anak, yakni ' + 
      VariabelKetiga[Math.floor(Math.pow(10, Math.random()))] + 
      ' yang hobinya ' + 
      VariabelKeempat + '. <br/> <br/>' + 
      ' Ya, dia adalah hasil perkawinan si ' +
      VariabelKetiga[this.angka3] +
      ' itu dengan ' +
      VariabelKetiga[Math.floor(Math.pow(10, Math.random()))] +
      '. Hobi ' + 
      VariabelKeempat +
      'nya itu, sangat menggangguku.' + 
      ' Bagaimana tidak, tiap kali dia ' +
      VariabelKeempat +
      ' pasti selalu ngajak-ngajak ' +
      VariabelKetiga[Math.floor(Math.pow(10, Math.random()))] +
      ' dan setelah ia melakukan hobinya itu, pasti ' + 
      VariabelKedua[Math.floor(Math.pow(10, Math.random()))] +
      ' mereka dengan membabi buta.'
    ;
  }
  this.cerita2 = function(id){
    for (var i = 5; i>0; i--){
    	if(i==5){
    		document.getElementById(id).innerHTML +=
        	i + ' hari yang lalu ' +
       	 	VariabelPertama[this.angka1] + ' ' + 
        	VariabelKedua[this.angka2] + ' ' + 
        	VariabelKetiga[this.angka3] + '. <br/>'
    	} else {
     		document.getElementById(id).innerHTML +=
        	i + ' hari yang lalu ' +
       	 	VariabelPertama[Math.floor(Math.pow(10, Math.random()))] + ' ' + 
        	VariabelKedua[this.angka2%i+i] + ' ' + 
        	VariabelKetiga[Math.floor(Math.pow(10, Math.random()))] + '. <br/>'
      	;}
    }
  }
}

// tanggal hari ini
	var hariIni = new Date();
	var dd = hariIni.getDate();
	var mm = hariIni.getMonth()+1;
	var yyyy = hariIni.getFullYear();
	if(dd<10) {
	dd='0'+dd
	} 
	if(mm<10) {
	mm='0'+mm
	} 
	hariIni = mm+'/'+dd+'/'+yyyy;

// nama hari saat ini 
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Minggu";
	weekday[1] = "Senin";
	weekday[2] = "Selasa";
	weekday[3] = "Rabu";
	weekday[4] = "Kamis";
	weekday[5] = "Jumat";
	weekday[6] = "Sabut";

	var month = new Array(12);
	month[0] = "Januari";
	month[1] = "Feberuari";
	month[2] = "Maret";
	month[3] = "April";
	month[4] = "Mei";
	month[5] = "Juni";
	month[6] = "Juli";
	month[7] = "Agustus";
	month[8] = "September";
	month[9] = "Oktober";
	month[10] = "November";
	month[11] = "Desember";

	var namaBulan = month[d.getMonth()];
	var namaHariIni = weekday[d.getDay()];
	var phone = document.getElementById("phoneNumber").value;

// Print Variabel
printVariabel(VariabelPertama, 'variabel1');
printVariabel(VariabelKedua, 'variabel2');
printVariabel(VariabelKetiga, 'variabel3');

// Submit Form
function validateForm() {
	if(!validatePhone()) {
		jsHide('storyPhoneNumberWrapper');
		jsHide('yourPhoneNumber');
		jsShow('submitPrompt');
		producePrompt('Nomor harus valid', 'submitPrompt', 'gray');
		setTimeout(function(){jsHide('submitPrompt');}, 2000);
	} else {
		jsShow("yourPhoneNumber");
		jsShow("storyPhoneNumberWrapper");
		var phone = document.getElementById("phoneNumber").value;
		var alur = new Angka(AngkaTerakhir(phone, 3), "storyPhoneNumber");
		document.getElementById("yourPhoneNumber").innerHTML = '3 digit terakhir nomermu adalah: ' + AngkaTerakhir(phone, 3);
		document.getElementById("storyHariIni").innerHTML = 'Hari ini, ' + namaHariIni + ', tanggal ' + hariIni + ' adalah hari yang aneh!';
		alur.cerita1("storyPhoneNumber") ;
	}
}
function validateForm2(month) {
	if(!validateNama() || !validateTanggalLahir() || !validateBulanLahir() || !validateTahunLahir()) {
		jsHide('storyDateWrapper');
		jsShow('submitPrompt2');
		producePrompt('data harus valid', 'submitPrompt2', 'gray');
		setTimeout(function(){jsHide('submitPrompt2');}, 2000);
	} else {
		jsShow("storyDateWrapper");
		var nama = document.getElementById("Nama").value;
		var tanggal = document.getElementById("TanggalLahir").value;
		var bulan = document.getElementById("BulanLahir").value;
		var namaBulan = month[document.getElementById("BulanLahir").value-1];
		var tahun = document.getElementById("TahunLahir").value;
		var fullTanggalLahir = AngkaTerakhir(tanggal, 1) + AngkaTerakhir(bulan, 1) + AngkaTerakhir(tahun, 1);
		console.log(fullTanggalLahir);
		var alur2 = new Angka(fullTanggalLahir, "storyPhoneNumber");
		document.getElementById("storySaya").innerHTML = 
			'Sebagai seorang yang lahir pada tanggal ' + 
			tanggal + ' ' + 
			namaBulan + ' ' + 
			tahun + 
			' saya merasa kurang beruntung. 5 hari kebelakang ada ada saja yang dialami.';
		alur2.cerita2("storyKemarin") ;
		document.getElementById("penutup").innerHTML = 
			'Semoga dengan bertambahnya ilmu melalui pembelajaran di Hacktiv8, Saya; ' + 
			nama +
			' calon FullStack Developer masadepan; memiliki masa depan yang cerah. Tidak mengalami hal-hal random seperti ini. Tamat. ';
	}
}
