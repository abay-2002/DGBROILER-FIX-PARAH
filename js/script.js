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
let elhPDivBayar = document.createElement('p');
elhDivBayar.appendChild(elhPDivBayar);

// totalHarga dan tombol trigger, ditulis dibawah supaya proses penambahan produk dilakukan terlebih dahulu lalu komputer baru akan membaca totalHarga dan tombol trigger karena bahkan sebelum tombol trigger diklik komputer sudah membaca sebuah event yaitu event yang diberikan dari produk1Trigger produk2Trigger dan produk3Trigger

// TIDAK UNTUK DITIRU PENULISAN KODE INI KURANG RAPIH :)


// biatkan dia menjadi global variable



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
		// dialogBox.classList.toggle('dialogBoxParentMuncul');
		wrapper.appendChild(elhDivBoxParent);
		totalHarga = hargaproduk1+hargaProduk2+hargaProduk3;
		elhTotal.innerHTML = 'Total Belanja: Rp.'+totalHarga;
		wrapper.appendChild(elhDivTotalWrapper);
		wrapper.appendChild(elhDivBayar);
	});
}

// menambahkan button untuk mengurangi harga
// idenya adalah ketika tombol - diklik maka hargaproduk berkurang
// idenya adalah ketika tombol dengan id produk[x]Remove diklik maka harga produk berkurang

















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