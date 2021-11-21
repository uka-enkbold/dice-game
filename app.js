// Create variable that holds players turn first player is player 0, second player is first player. 
var activePlayer = 0;

//Create variable that sum point of each players point
var scores = [0, 0];

//Create variable that saves each turn's point of each player.
var roundScore = 0;

//create variable that holds dice point and set 1-6 numbers randomly to the dice.
var dice = Math.floor(Math.random()*6)+1;

// program starts here

document.getElementById("score-0").textContent = 0; 
document.getElementById("score-1").textContent = 0; 
document.getElementById("current-0").textContent = 0; 
document.getElementById("current-1").textContent = 0; 

//create dice dom variable for future easier access 

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// How to access through dom shows below
// document.querySelector("#score-0").textContent = 0; 
// document.querySelector("#score-1").textContent = 0; 
// document.querySelector("#current-0").textContent = 0; 
// document.querySelector("#current-1").textContent = 0; 
// document.querySelector("#score-1").innerHTML = "<em> Yes!!! </em>";

// Шоог шидэх эвэнт листэнэр 

document.querySelector(".btn-roll").addEventListener("click", function(){
    // get rolldice button from DOM// add event listener function to the rolldice button 
// when it's clicked get the dice pics from dom and show it to the browser change it interchangeable after each click.
// 1-6 доторх санамсаргүй нэг тоо гаргаж ирнэв
    var diceNumber = Math.floor(Math.random()*6)+1;
// буусан санамсаргүй тоонд харгалзах шооны зургыг вэб дээр гаргаж ирнэв
    diceDom.style.display = "block";
// буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэв
    diceDom.src = 'dice-' + diceNumber + ".png";
    // alert("Шоог шидлээ : " + diceNumber);
    if(diceNumber !==1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        switchToNextPlayer();
    }
    
});

// HOLD товчны эвэнт листэнэр 

document.querySelector('.btn-hold').addEventListener('click', function(){
    //уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Уг тоглогч хожсон эсэхийш шалгах оноо 100-с их эсэх 
    if (scores[activePlayer]>= 10){
        // ялагч гэсэн текстийг нэрний оронд гаргаж өгнө
        document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        switchToNextPlayer(); 
    }
    // Хялбар аргаар бичвэл

    // if (activePlayer ===0){
    //     scores[0] = scores [0] + roundScore;
    // } else { 
    //     scores[1] = scores [1]+ roundScore;
    // }

   // Дэлгэц дээр оноог өөрчилнө.
   document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  // Тоглогчийн ээлжийг солино
switchToNextPlayer();
})
// Энэ функц нь тоглох ээлжийн дараачийн тоглогч руу шилжүүлдэг. 
function switchToNextPlayer(){
    // Ээлжийн оноог 0 болгоно.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    // Тоглогчийн ээлжийг солино.
    document.getElementById("current-" + activePlayer).textContent = roundScore;
        //Хэрэв идэвхтэй тоглогч  0 байвал идэхвтэй тоглогчийг 1 болго 
        //Хэрэв үгүй бол тоглогчийг 0 болго    
        //Тоглочийн ээлжиндээ цуглуулсан оноог 0 болгоно мөн тоглогчийн ээлжийг шилжүүлнэ.
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // Хялбараар бичих арга 
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
 
        // Улаан цэгийг шилжүүлэх код бичнэ
     document.querySelector(".player-0-panel").classList.toggle("active");

     document.querySelector(".player-1-panel").classList.toggle("active");

        // Шоог түр алг болгох
        diceDom.style.display = "none";
}