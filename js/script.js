// idenya adalah ketika user meng click button maka akan muncul sebuah dialog box, beberapa button yang apa bila diklik menghasilkan dialog box yang sama



// TOMBOL MEMUNCULKAN dialogbox

// ambil parentnya akan appendChild
let wrapper = document.getElementById('dialogBoxWrapper');
// bikin sebuah element
let elhDivBoxParent = document.createElement('div');
elhDivBoxParent.setAttribute('class', 'dialogBoxParentMuncul');
let tombol = document.querySelectorAll('.tombol');
for(i=0; i<tombol.length; i++){
	tombol[i].addEventListener('click',function(){
		// dialogBox.classList.toggle('dialogBoxParentMuncul');
		wrapper.appendChild(elhDivBoxParent);
		// output: 
	      // <div id="dialogBoxWrapper">
	      //   <div class="dialogBoxParentMuncul">
	          
	      //   </div>
	      // </div>
	});
}


// elhTotal
let divTotalParent = document.createElement('div');
divTotalParent.setAttribute('id','totalWrapper');

// elhDivProduk1
let produk1Trigger = document.createElement('div');
produk1Trigger.setAttribute('class','produk1TriggerWrapper');

// eventProduk1
let tProduk1 = document.getElementById('produk1');
tProduk1.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk1Trigger);
	wrapper.appendChild(divTotalParent);
});


// elhDivProduk2
let produk2Trigger = document.createElement('div');
produk2Trigger.setAttribute('class','produk2TriggerWrapper');

// eventProduk2
let tProduk2 = document.getElementById('produk2');
tProduk2.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk2Trigger);
	wrapper.appendChild(divTotalParent);
});

// elhDivProduk3
let produk3Trigger = document.createElement('div');
produk3Trigger.setAttribute('class','produk3TriggerWrapper');

// eventProduk2
let tProduk3 = document.getElementById('produk3');
tProduk3.addEventListener('click',function(){
	elhDivBoxParent.appendChild(produk3Trigger);
	wrapper.appendChild(divTotalParent);
});




















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