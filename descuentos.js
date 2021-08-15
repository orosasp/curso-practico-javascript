// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCupon = document.getElementById("inputCupon");
  const cuponValue = inputCupon.value;

  const isCouponValueValid = function(coupon) {
    return coupon.name === cuponValue;
  }

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón" + cuponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
  }

  // if (!cupons.includes(cuponValue)) {
  //  alert("El cupón" + cuponValue + "no es válido"); 
  // } else if (cuponValue === "JuanDC_es_Batman") {
  //   descuento = 15;
  // } else if (cuponValue === "pero_no_le_digas_a_nadie") {
  //   descuento = 30;
  // } else if (cuponValue === "es_un_secreto") {
  //   descuento = 25;
  // }

  // let descuento;

  // switch(cuponValue) {
  //   case "JuanDC_es_Batman":
  //     descuento = 15;
  //   break;
  //   case "pero_no_le_digas_a_nadie":
  //     descuento = 30;
  //   break;
  //   case "es_un_secreto":
  //     descuento = 25;
  //   break;
  // }

  // const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  // const resultPrice = document.getElementById("resultPrice");
  // resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// const cupons = [
//   "JuanDC_es_Batman",
//   "pero_no_le_digas_a_nadie",
//   "es_un_secreto",
// ];

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

