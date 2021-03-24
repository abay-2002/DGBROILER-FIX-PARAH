// idenya adalah ketika user meng click button maka akan muncul sebuah dialog box, beberapa button yang apa bila diklik menghasilkan dialog box yang sama



// TOMBOL MEMUNCULKAN dialogbox

// ambil parentnya dialogBoxWrapper akan appendChild
let wrapper = document.getElementById('dialogBoxWrapper'); 
// elh div boxparent
let elhDivBoxParent = document.createElement('div'); 
elhDivBoxParent.setAttribute('class', 'dialogBoxParentMuncul');

// elhTotal div id totalWrapper
let divTotalParent = document.createElement('div');
divTotalParent.setAttribute('id','totalWrapper');

// elhBayar div id bayar
let elhBayar = document.createElement('div');
elhBayar.setAttribute('id','bayar');


let tombol = document.querySelectorAll('.tombol');
for(i=0; i<tombol.length; i++){
	tombol[i].addEventListener('click',function(){
		// dialogBox.classList.toggle('dialogBoxParentMuncul');
		wrapper.appendChild(elhDivBoxParent);
		wrapper.appendChild(divTotalParent);
		wrapper.appendChild(elhBayar);
	});
}

// karena variable hargaproduk bersifat variablescope maka apabila misal kita klik pada produk2 dia akan menambah 20000 lalu ditaruh hargaproduk menjadi 20000 lalu apabila kita mengklik harga produk3 maka hargaproduk3 akan tertimpa dengan hargaproduk2 yang diinputkan sebelumnya oleh karea itu kita perlu mendefinisikan masing-mmasing harganya


// harga produk1
let hargaProduk1 = 0;
// elhDivProduk1produk1TriggerWrapper
let produk1Trigger = document.createElement('div');
produk1Trigger.setAttribute('id','produk1TriggerWrapper');
// eventProduk1
let tProduk1 = document.getElementById('produk1');
tProduk1.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk1Trigger);
	hargaProduk1 += 10000;
	produk1Trigger.innerHTML = 'Ayam utuh Rp'+ hargaProduk1.toString();
});



// harga produk2
let hargaProduk2 = 0;
// elhDivProduk2produk2TriggerWrapper
let produk2Trigger = document.createElement('div');
produk2Trigger.setAttribute('id','produk2TriggerWrapper');
// eventProduk2
let tProduk2 = document.getElementById('produk2');
tProduk2.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk2Trigger);
	hargaProduk2 += 15000;
	produk2Trigger.innerHTML = 'Paha ayam Rp'+ hargaProduk2.toString();
});



// harga produk3
let hargaProduk3 = 0;
// elhDivProduk3produk3TriggerWrapper
let produk3Trigger = document.createElement('div');
produk3Trigger.setAttribute('id','produk3TriggerWrapper');
// eventProduk3
let tProduk3 = document.getElementById('produk3');
tProduk3.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk3Trigger);
	hargaProduk3 += 20000;
	produk3Trigger.innerHTML = 'Sayap ayam Rp'+ hargaProduk3.toString(); 
});

// jadi idenya adalah ketika tombol merah yaitu id='produk1' 2 3 diclick maka akan menghasilkan sebuah harga 




















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