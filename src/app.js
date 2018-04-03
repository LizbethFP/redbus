window.addEventListener('load', () => {
  // slider payment-cash
  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [{
      breakpoint: 800,
      settings: {
        item: 3,
        slideMove: 3,
        slideMargin: 6,
      }
    },
    {
      breakpoint: 480,
      settings: {
        item: 3,
        slideMove: 3
      }
    },
    {
      breakpoint: 320,
      settings: {
        item: 3,
        slideMove: 3
      }
    }
    ]
  });
  // slider payment-internet
  $('#payment-internet').lightSlider({
    item: 5,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 3,
        slideMargin: 6
      }
    }]
  });
  // data of icon banks
  const data = {
    internetBanks: [{
      id: 'BCP',
      figcaption: '',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.']
    },
    {
      id: 'BBVA',
      figcaption: '',
      url: 'assets/images/logo-bbva.svg',
      detail: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.']
    },
    {
      id: 'Interbank',
      figcaption: '',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO']
    },
    {
      id: 'Scotiabank',
      figcaption: '',
      url: 'assets/images/logo-scotia.svg',
      detail: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES']
    },
    {
      id: 'Banbif',
      figcaption: '',
      url: 'assets/images/logo-banbif.svg',
      detail: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO']
    }
    ],
    cashBanks: [{
      id: 'BCP',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bcp.svg'
    },
    {
      id: 'BBVA',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bbva.svg'
    },
    {
      id: 'Interbank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-interbank.svg'
    },
    {
      id: 'Banbif',
      figcaption: 'Agencias',
      url: 'assets/images/logo-banbif.svg'
    },
    {
      id: 'Fullcarga',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-fullcarga.png'
    },
    {
      id: 'Scotiabank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-scotia.svg'
    },
    {
      id: 'WesternUnion',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-wu.svg',
    },
    {
      id: 'Kasnet',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-kasnet.png'
    },
    ]
  };
  // print in document icon payment internet for slider
  data.internetBanks.map(element => {
    let itemSlider = `<li class="nav-item icon-bank" data-detail="${element.detail}">
                            <img src="${element.url}" alt=${element.id} class="icon-payment-slider img-payment-internet my-2">
                        </li>`;
    $('#payment-internet').append(itemSlider);
  });
  // event for get details icons
  $('.icon-bank').click(function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    $('#instructions-tab1').html('');
    let detailIntBank = `<p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-one-in-a-circle.png" alt="1" class="img-clock mx-1"><span>${$(this).data('detail')}</span></p>
          <p class="d-flex font-size-payment-instruction">
            <img src="assets/images/number-two-in-a-circle.png" alt="1" class="img-clock mx-1">
            <span>Ingresa tu código CIP: 9125682 y sigue los pasos.</span>
          </p>`;
    $('#instructions-tab1').append(detailIntBank);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  data.cashBanks.map(element => {
    let itemCarrousel = `<li id=${element.id} class="icon-cash-bank" data-detail="${element.detail}">
                          <img src=${element.url} alt=${element.id}>
                          <p class="text-center">${element.figcaption}</p>
                        </li>`;
    $('#responsive').append(itemCarrousel);
  });

  $('#responsive').on('click', 'li', function() {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
  });

  $('.icon-cash-bank').click(function() {
    switch (true) {
    case $(this).is('#BCP'):
      $('#instructions-tab2').html('');
      let detailCashBankBcp = `<div class="BCP">
            <p class="float-left">
              <span class="mr-2">(*)</span>Agentes BCP: Brinda el código de empresa 02186.</p>
            <p class="float-right">
              <span class="mr-2">(*)</span>Agencias BCP: Costo adicional: S/.1.00.</p>
          </div>`;
      $('#instructions-tab2').append(detailCashBankBcp);
      break;
    case $(this).is('#BBVA'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Interbank'):
      $('#instructions-tab2').html('');
      let detailCashBankInt = `<div class="Interbank">
            <p class="float-left">
              <span class="mr-2">(*)</span>Agentes Interbank: Brinda el siguiente código 2735001</p>
            <p class="float-right">
              <span class="mr-2">(*)</span>Agencias Market de Interbank: Costo adicional S/. 2.00.</p>
          </div>`;
      $('#instructions-tab2').append(detailCashBankInt);
      break;
    case $(this).is('#Banbif'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Fullcarga'):
      $('#instructions-tab2').html('');
      let detailCashBankFullC = `<div class="Fullcarga">
            <p class="float-left">
              <span class="mr-2">(*)</span>Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.</p>
          </div>`;
      $('#instructions-tab2').append(detailCashBankFullC);
      break;
    case $(this).is('#Scotiabank'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#WesternUnion'):
      $('#instructions-tab2').html('');
      break;
    case $(this).is('#Kasnet'):
      $('#instructions-tab2').html('');
      break;
    }
  });

  $('#print-icon').on('click', () => {
    window.print();
  });

  // resize code payment
  /* let code = '9125682';
  $('.code').text(code);
  // let code = $('.code').text();
  let width = 0;
  if (self.screen) {   
    width = screen.width;
  } else if (self.java) { // for NN3 with enabled Java
    let jkit = java.awt.Toolkit.getDefaultToolkit();
    let scrsize = jkit.getScreenSize();
    width = scrsize.width;
  }
  if (width > 0 && width < 576 && code.length >= 8) {
    let fontSize = 1;
    fontSize -= 0.2;
    let newFontSize = fontSize + 'em';
    $('.code').css('font-size', newFontSize);
  } else {
    let fontSize = 2.3;
    fontSize -= 0.2;
    let newFontSize = fontSize + 'em';
    $('.code').css('font-size', newFontSize);
  }*/
});