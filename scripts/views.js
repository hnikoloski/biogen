let secondHeader = `   <div class="topBar">
<div class="mobileHide">
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-4">
            <a href="#!">InformArtistica</a>
        </div>
        <div class="col-sm-12 col-md-4">
          <img src="./assets/img/logo.svg" alt="logo" class="logo">
      </div>
      <div class="col-sm-12 col-md-4">
        <a href="#!" class="logOut">Alessandra</a>
    </div>
    </div>
</div>
</div>
<div class='mobileShow'>
<div class="container">
    <div class="row">
    <ul>    
    <li class="logoWrapper">
        <img src="./assets/img/logo.svg" alt="logo" class="logo">
        </li>
        <li class="logOutWrapper">
        <a href="#!">
        <img src="./assets/img/person.png" alt="LogOut" class="logOutMobile">
        
        </a>
        </li>
        </ul>
       
    </div>
</div>
</div>
</div>

`;

let secondMain= ` <div class="content toggleable">
<div class="container">
    <div class="row">
        <div class="col text-center">
            <h1>Inform<span class="greenFont">A</span>rtistica</h1>
            <div class="content-container">
              <p class="paraTitle">Poche cose riescono a far emergere il meglio 
                di ognuno di noi come l’arte.</p>
                <p>Passione, ricerca e tecnica sono sempre all’origine di ogni grande 
                  opera artistica e allo stesso modo guidano il nostro lavoro quotidiano 
                  per raggiungere ogni giorno traguardi sempre più ambiziosi.</p>
                  <h5>TIRA FUORI L’ARTISTA CHE C’è IN TE!</h5>
                  <button class="btnNext openThird">
                    <img src="./assets/img/arrow-right.svg" alt="Next">
                  </button>
            </div>
        </div>
    </div>
</div>
</div>
<script>
$(document).ready(function(){
  $('.openThird').on('click' ,function(){
    $('.toggleable').animate({'opacity': 0}, 400, function(){
      $(this).html(thirdMain).animate({'opacity': 1}, 400); 
    });
  });
})</script>`;

let thirdMain = `  <div class="content toggleable thirdScreen">
<div class="container">
  <div class="row">
    <div class="col-md-6 text-center">
      <div class="leftBoxBackground"></div>
      <div class="leftBox">
        <p>
          Se dovessi sceglierne uno, in quale artista ti <span class="bold">identificheresti</span> di più, pensando
          al suo modo di affrontare
          la vita ed il lavoro?
        </p>
        <div>
          <textarea id="comment" maxlength="150"></textarea>
          <label id="characterLeft"></label>
        </div>
      </div>
    </div>
    <div class="col-md-6 text-center">
      <div class="rightBoxBackground"></div>
      <div class="rightBox">
        <p>
          Condividi quella che
          secondo te è la sua <span class="bold">opera</span>
          più significativa
        </p>
        <input type="file">
        <div>
          <div class="uploadZone">
            <p>Trascina qui il file da caricare oppure</p>
            <img src="./assets/img/plus.svg" alt="plus sign">
            <div class="uploadBtn">Carica contenuto</div>
          </div>
        </div>
          <button class="btnNext"><img src="./assets/img/arrow-right.svg" alt="next"></button>
      </div>
    </div>
  </div>
</div>
</div>
<script>
$(document).ready(function(){
  $('.btnNext').on('click' ,function(){
    console.log(123)
    $('.toggleable').animate({'opacity': 0}, 400, function(){
      $(this).html(fourthMain).animate({'opacity': 1}, 400); 
    });
  });
})</script>`;

let fourthMain = `<div class="content toggleable fifthScreen">
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h1>Ci vediamo 
        il 15 Settembre</h1>
        <a href="#!" class="btn-yellow" id="btnNext">Una sorpresa arriverà molto presto</a>
    </div>
    
  </div>
</div>
</div>
<script>
$(document).ready(function(){
  $('#btnNext').on('click' ,function(){
    console.log(123)
    $('.toggleable').animate({'opacity': 0}, 400, function(){
      $(this).html(fifthMain).animate({'opacity': 1}, 400); 
    });
    $('body').addClass('sixth');
  });
})</script>`;

let fifthMain= `<div class="content toggleable sixthScreen">
<div class="container">
  <div class="row">
    <div class="col text-center">
      <div class="wrapper">
      <h5>Troppo presto! </h5>
      <p>Cliccami dal </p>
      <h5>15 Settembre :) </h5>
      <a href='/index.html' class="btnNext">
        <img src="../assets/img/arrow-right.svg" alt="Submit Button">
      </a>
      </div>
    </div>
    
  </div>
</div>
</div>`