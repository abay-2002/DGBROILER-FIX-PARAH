// idenya adalah ketika user meng click button maka akan muncul sebuah dialog box, beberapa button yang apa bila diklik menghasilkan dialog box yang sama

// dialogboxwrapper
let wrapper = document.getElementById('dialogBoxWrapper');
// elh wrapper -> divboxparentmuncul
let elhDivBoxParent = document.createElement('div'); 
elhDivBoxParent.setAttribute('class', 'dialogBoxParentMuncul'); 

// totalWrapper
let elhDivTotalWrapper = document.createElement('div');
elhDivTotalWrapper.setAttribute('id','totalWrapper');
let elhTotal = document.createElement('p');
elhTotal.setAttribute('id','totalHarga');
elhDivTotalWrapper.appendChild(elhTotal);

// divIdBayar
let elhDivBayar = document.createElement('div');
elhDivBayar.setAttribute('id','bayar');
let elhADivBayar = document.createElement('a');
elhDivBayar.appendChild(elhADivBayar);
elhADivBayar.innerHTML = 'test';

// totalHarga dan tombol trigger, ditulis dibawah supaya proses penambahan produk dilakukan terlebih dahulu lalu komputer baru akan membaca totalHarga dan tombol trigger karena bahkan sebelum tombol trigger diklik komputer sudah membaca sebuah event yaitu event yang diberikan dari produk1Trigger produk2Trigger dan produk3Trigger

// TIDAK UNTUK DITIRU PENULISAN KODE INI KURANG RAPIH :)

// quantityProduk1 
let quantityProduk1 = 0;
// hargaProduk1 
let hargaproduk1 = 0;
// elhDivProduk1produk1TriggerWrapper
let produk1Trigger = document.createElement('div');
produk1Trigger.setAttribute('id','produk1TriggerWrapper');
// eventProduk1
let tProduk1 = document.getElementById('produk1');
tProduk1.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk1Trigger);
	quantityProduk1 += 1;
	hargaproduk1 += 10000;
	produk1Trigger.innerHTML = 'Ayam utuh Rp.'+ hargaproduk1.toString()+' '+quantityProduk1+' item';
});


	let removeProduk1 = document.getElementById('produk1Remove');
	removeProduk1.addEventListener('click',function(){
		if((quantityProduk1 >= 1)&&(hargaproduk1 >= 10000)){
		quantityProduk1 -= 1;
		hargaproduk1 -= 10000;
		produk1Trigger.innerHTML = 'Ayam utuh Rp.'+ hargaproduk1.toString()+' '+quantityProduk1+' item';
		totalHarga -= 10000;
		elhTotal.innerHTML = 'Total Belanja: Rp.'+totalHarga;
		}
		else {
			elhDivBoxParent.removeChild(produk1Trigger);
		}
	});


// quantityProduk2
let quantityProduk2 = 0;
// harga produk2
let hargaProduk2 = 0;
// elhDivProduk2produk2TriggerWrapper
let produk2Trigger = document.createElement('div');
produk2Trigger.setAttribute('id','produk2TriggerWrapper');
// eventProduk2
let tProduk2 = document.getElementById('produk2');
tProduk2.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk2Trigger);
	quantityProduk2 += 1;
	hargaProduk2 += 20000;
	produk2Trigger.innerHTML = 'Paha Ayam Rp.'+hargaProduk2.toString()+' '+quantityProduk2+' item';
});


	let removeProduk2 = document.getElementById('produk2Remove');
	removeProduk2.addEventListener('click',function(){
		if((quantityProduk2 >= 1)&&(hargaProduk2 >= 20000)){
		quantityProduk2 -= 1;
		hargaProduk2 -= 20000;
		produk2Trigger.innerHTML = 'Paha Ayam Rp.'+ hargaProduk2.toString()+' '+quantityProduk2+' item';
		totalHarga -= 20000;
		elhTotal.innerHTML = 'Total Belanja: Rp.'+totalHarga;
		}
		else {
			elhDivBoxParent.removeChild(produk2Trigger);
		}
	});


// quantityProduk3
let quantityProduk3 = 0;
// harga produk3
let hargaProduk3 = 0;
// elhDivProduk3produk3TriggerWrapper
let produk3Trigger = document.createElement('div');
produk3Trigger.setAttribute('id','produk3TriggerWrapper');
// eventProduk3
let tProduk3 = document.getElementById('produk3');
tProduk3.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk3Trigger);
	quantityProduk3 += 1;
	hargaProduk3 += 30000;
	produk3Trigger.innerHTML = 'Sayap Ayam Rp.'+hargaProduk3.toString()+' '+quantityProduk3+' item';
});


	let removeProduk3 = document.getElementById('produk3Remove');
	removeProduk3.addEventListener('click',function(){
		if((quantityProduk3 >= 1)&&(hargaProduk3 >= 30000)){
		quantityProduk3 -= 1;
		hargaProduk3 -= 30000;
		produk3Trigger.innerHTML = 'Paha Ayam Rp.'+ hargaProduk3.toString()+' '+quantityProduk3+' item';
		totalHarga -= 30000;
		elhTotal.innerHTML = 'Total Belanja: Rp.'+totalHarga;
		}
		else {
			elhDivBoxParent.removeChild(produk3Trigger);
		}
	});


// TOMBOL MEMUNCULKAN dialogbox
// totalHarga
let totalHarga = 0;
// tombol trigger
let tombol = document.querySelectorAll('.tombol');
for(i=0; i<tombol.length; i++){
	tombol[i].addEventListener('click',function(){
		if(totalHarga >= 0){
			// dialogBox.classList.toggle('dialogBoxParentMuncul');
			wrapper.appendChild(elhDivBoxParent);
			totalHarga = hargaproduk1+hargaProduk2+hargaProduk3;
			elhTotal.innerHTML = 'Total Belanja: Rp.'+totalHarga;
			wrapper.appendChild(elhDivTotalWrapper);
			wrapper.appendChild(elhDivBayar);
		}
		else{
			wrapper.removeChild(elhDivTotalWrapper);
			wrapper.removeChild(elhDivBayar);
		}
	});
}

// form
	// form input
	let tagForm = document.createElement('form');
	tagForm.setAttribute('name','produkForm');

	// tagNama
	let tagNama = document.createElement('span');
	tagNama.innerHTML = 'Nama:'
	let tagInputNama = document.createElement('input');
	tagInputNama.setAttribute('type','text');
	tagInputNama.setAttribute('required','text');

	// tagAlamat
	let tagAlamat = document.createElement('span');
	tagAlamat.innerHTML = 'Alamat:'
	let tagInputAlamat = document.createElement('input');
	tagInputAlamat.setAttribute('type','text');
	tagInputAlamat.setAttribute('required','text');

	// tagWhatsApp
	let tagWhatsApp = document.createElement('span');
	tagWhatsApp.innerHTML = 'WhatsApp:'
	let tagInputWhatsApp = document.createElement('input');
	tagInputWhatsApp.setAttribute('type','text');
	tagInputWhatsApp.setAttribute('required','text');

	// formclose
	let tagClose = document.createElement('a');
	tagClose.innerHTML = 'x';

	// form submit
	let tagSubmit = document.createElement('a');
	tagSubmit.innerHTML = 'Kirim';

	// formwrapper
	let divPopUpConfirmWrapper = document.getElementById('popUpConfirmWrapper');

elhADivBayar.addEventListener('click',function(){
	let divPopUpConfirm = document.createElement('div');
	divPopUpConfirm.setAttribute('id','popUpConfirm');

	let divDialogPopUp = document.createElement('div');
	divDialogPopUp.setAttribute('id','dialogPopUp');

	divPopUpConfirmWrapper.appendChild(divPopUpConfirm);
	divPopUpConfirm.appendChild(divDialogPopUp);

	divDialogPopUp.appendChild(tagClose);
	tagForm.appendChild(tagNama);
	tagForm.appendChild(tagInputNama);
	tagForm.appendChild(tagAlamat);
	tagForm.appendChild(tagInputAlamat);
	tagForm.appendChild(tagWhatsApp);
	tagForm.appendChild(tagInputWhatsApp);
	tagForm.appendChild(tagSubmit);
	divDialogPopUp.appendChild(tagForm);
	
	// untuk close
	divPopUpConfirmWrapper.setAttribute('class','toggleBayar');

	tagClose.addEventListener('click',function(){
		divPopUpConfirmWrapper.setAttribute('class','toggleBayarShow');
	});
});

// submit
tagSubmit.addEventListener('click',function(){
	let valueInputNama = tagInputNama.value;
	let valueInputAlamat = tagInputAlamat.value;
	let valueInputWhatsApp = tagInputWhatsApp.value;
	if((valueInputNama.innerText = valueInputNama.length == 0)||(valueInputAlamat.innerText = valueInputAlamat.length == 0)||(valueInputWhatsApp.innerText = valueInputWhatsApp.length == 0)){
		alert('masukan nilai!!');
	}else{
		tagSubmit.setAttribute('target','blank');
		tagSubmit.setAttribute('href','https://wa.me/6282297008375/?text=Hallo%20Akbar%20Angkasa saya '+' '+valueInputNama+' Alamat: '+valueInputAlamat+' No WhatsApp: '+valueInputWhatsApp+' pesan: '+produk1Trigger.innerHTML+' '+produk2Trigger.innerHTML+' '+produk3Trigger.innerHTML+' total belanja: '+totalHarga);
	}
});
// let valueNamaFix = tagInputNama.value;
// let valueAlamatFix = tagInputAlamat.value;
// let valueWhatsAppFix = tagInputWhatsApp.value;

// yang terjadi adalah ambil value dari tagInputNama dengan methode .value
// tampung value di valueInputNama
// apabila value text dari valueInputNama lengthnya sama dengan 0
// maka lakukan alert('masukan nilai!')
// else nilai masuk



// tagSubmit.addEventListener('click',function(){
// 	let value = tagInputNama.value;
// 	value.innerText = value.length == 0 ? alert('masukan nilai') : alert('nilai masuk');
// });



	// if((typeof valueNamaFix === 'string')&&(typeof valueAlamatFix === 'string')&&(typeof valueWhatsAppFix === 'string')){	
	// 	alert(valueNamaFix + valueAlamatFix + valueWhatsAppFix);
	// }else{
	// 	alert('masukan nilai!');
	// }





// let tekan = document.getElementById('tekan');
// tekan.addEventListener('click',function(){
// 	let nilai = document.getElementById('inputNamaUser').value;
// 	alert(nilai);
// });


// tagSubmit.addEventListener('click',function(){
// 	tagSubmit.setAttribute('href','https://wa.me/6282297008375/?text=Hallo%20Akbar%20Angkasa' + produk1Trigger.innerHTML + ' ' + produk2Trigger.innerHTML + ' ' + produk3Trigger.innerHTML);
// });

// https://wa.me/6282297008375/?text=Hallo%20Akbar%20Angkasa
// tombol kirim yang apabila diklik akan mengirim value produk1 produk2 produk3 dan form ke whatsapp kita akan menggunakan API Whatsapp









// elhADivBayar.addEventListener('click',function(){
// 	elhADivBayar.setAttribute('target','blank');
// 	elhADivBayar.setAttribute('href','https://wa.me/6282297008375/?text=Hallo%20Akbar%20Angkasa'+' saya ingin pesan '+ produk1Trigger.innerHTML + ' ' + produk2Trigger.innerHTML + ' ' + produk3Trigger.innerHTML + ' Total Belanja: '+totalHarga);
// });

// popUpConfirm








// elhADivBayar.setAttribute('href','https://wa.me/6282297008375/?text=Hallo%20Akbar%20Angkasa'+'saya ingin pesan '+hargaproduk1);



// menambahkan button untuk mengurangi harga
// idenya adalah ketika tombol - diklik maka hargaproduk berkurang
// idenya adalah ketika tombol dengan id produk[x]Remove diklik maka harga produk berkurang


// tujuaan dari mengkilik tombol bayar adalah untuk mengirim pesan dari hasil input user yaitu produk1 produk2 dan produk3
// ada beberapa kemungkinan
// user membeli produk1
// user membeli produk2
// user membeli produk3
// user membeli produk1 dan produk2
// user membeli produk2 dan produk1
// user membeli produk2 dan produk3
// user membeli produk3 dan produk2
// user membeli produk1 dan produk3
// user membeli produk3 dan produk1
// user membeli produk1 2 3
// user membeli produk2 1 3
// user membeli produk3 2 1
// user membeli produk3 1 2












// let total = document.getElementsByClassName('total');
// total.style.height = elhDiv.style.height;









// PENUTUP MEMUNCULKAN DIALOGBOX
	
// produk1 
// document.getElementById('produk1');

//       <!-- dialog box pesan -->
//       <div id="dialogBoxWrapper">
//         <div class="dialogBoxParentMuncul">
//           <div class="produk1Trigger">
            
//           </div>
//           <div class="produk2Trigger">
            
//           </div>
//           <div class="produk3Trigger">
            
//           </div>
//         </div>
//       </div>
//       <!-- penutup dialog box pesan -->
// TINGGAL BIKIN VERSI JAVASCRIPTNYA DIATAS