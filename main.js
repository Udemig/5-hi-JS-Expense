const harcamaInput = document.querySelector('#harcama');
const fiyatInput = document.querySelector('#fiyat');
const formBtn = document.querySelector('.ekle-btn');
const liste = document.querySelector('.liste');
const toplamBilgi = document.querySelector('#toplam-bilgi');

// izleme işlemleri
formBtn.addEventListener('click', addExpense);
liste.addEventListener('click', handleClick);

// toplam state'i (durum)
let toplam = 0;

function updateToplam(fiyat) {
  toplam += Number(fiyat);
  toplamBilgi.innerText = toplam;
}

// harcama oluşturma
function addExpense(e) {
  e.preventDefault();

  //   doğrulama yapma
  if (!fiyatInput.value || !harcamaInput.value) {
    alert('Formları Doldurun');
    // fonkisyonu durduruyoruz
    return;
  }

  // div oluşturma
  const harcamaDiv = document.createElement('div');

  // class ekleme
  harcamaDiv.classList.add('harcama');

  // içeriğini ayarlama
  harcamaDiv.innerHTML = `
          <h2>${harcamaInput.value}</h2>
          <h2>${fiyatInput.value}</h2>
          <div class="buttons">
            <img id="payment" src="/images/pay.png" />
            <img id="remove" src="/images/remove.png" />
          </div>
           `;
  // oluşan harcamayı htmle gönderme (listeye ekleme)
  liste.appendChild(harcamaDiv);

  //   toplamı güncelle
  updateToplam(fiyatInput.value);

  //   formu temizleme
  harcamaInput.value = '';
  fiyatInput.value = '';
}

// listeye tıklanma olayını yönetme
function handleClick(e) {
  const eleman = e.target;
  if (eleman.id === 'remove') {
    alert('silme işlemi başlatıldı');
  }
}
