let itemNumber = 1;
let total = 0;
let discountCheck = 0;

function handleClickCard(target) {
  const itemNameContainer = document.getElementById("selectedItems");
  itemName =
    target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
  // target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
  // console.log(itemName);
  const li = document.createElement("ol");
  li.innerText = itemNumber + " . " + itemName;
  itemNameContainer.appendChild(li);
  itemNumber++;

  const itemPriceContainer =
    target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split( " "
    )[0];
  itemPriceInTaka = parseFloat(itemPriceContainer);
  totalPrice = parseFloat(total);
  pastPrice = parseFloat(itemPriceInTaka.toFixed(2));
  total = total + pastPrice;


  // name adding done 


  document.getElementById("first-total").innerText = total.toFixed(2);

  const makePurchaseBtn = document.getElementById('makePurchaseBtn')
  if(total > 0 ){
    makePurchaseBtn.removeAttribute('disabled');
    makePurchaseBtn.style.backgroundColor = '#E527B2'
  }
  else{
    makePurchaseBtn.setAttribute('disabled','disabled');

  }
const applyBtn = document.getElementById('applyBtn')
if(total >= 200){
    applyBtn.removeAttribute('disabled');
    applyBtn.style.backgroundColor = '#E527B2'
}else{
    applyBtn.setAttribute('disabled','disabled');
}


}


document.getElementById('applyBtn').addEventListener('click',function(){
    const setValue = document.getElementById("couponInput").innerText;
    const discountNumber = document.getElementById('discountNumber');
    const firstPrice = document.getElementById('first-total');
    // console.log(firstPrice);
    const grandTotal = document.getElementById('grandTotal')
    // console.log();
    let total = parseFloat(firstPrice.innerText);

    if(couponInput.value === "SELL200")
    {
        const disc200Percent = total * .2;
        // console.log(disc200Percent);
        
    //     const discountNumber = parseFloat(discountNumber)
    //    console.log(typeof(discountNumber));
        discountNumber.innerText = disc200Percent.toFixed(2);
        // console.log(discountNumber.innerText);

        const totalAfter = total - disc200Percent;
        firstPrice.innerText = total.toFixed(2)
        grandTotal.innerText = totalAfter.toFixed(2);
        discountNumber.innerText = disc200Percent.toFixed(2);
    }else{
     discountNumber.innerText = '0.00'
        grandTotal.innerText = total.toFixed(2)
        grandTotal.innerText = total;
    }
    
})




document.getElementById('reloadPage').addEventListener('click',function(){
    location.reload()
})
