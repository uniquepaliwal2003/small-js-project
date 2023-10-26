const scoreOne = document.querySelector('#ScoreOne');
const ScoreTwo = document.querySelector('#ScoreTwo');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const reset = document.querySelector('#reset');
const para = document.querySelector('#para2');
let oneScore=0;
let twoScore=0;
buttonOne.addEventListener('click',function(){
    if( upto.selectedIndex == 0 ){
        alert('first select a value');
    }else{
    oneScore = oneScore + 1;
    scoreOne.textContent=oneScore;
    if( oneScore == value){
        buttonOne.disabled=true;
        buttonTwo.disabled=true;
        buttonOne.style.backgroundColor="grey";
        buttonTwo.style.backgroundColor="grey";
        buttonOne.style.color="white";
        buttonTwo.style.color="white";
        reset.style.color="white";
        if( oneScore > twoScore )
        para.innerText="Player One Wins";
        else if( oneScore <twoScore)
        para.innerText="player Two Won";
        else
        para.innerText="Match Draw";
        para.style.color="red";
        scoreOne.style.color="red";
    }
}
});
buttonTwo.addEventListener('click',function(){
    if( upto.selectedIndex == 0 ){
        alert('first select a value');
    }else{
    twoScore = twoScore + 1;
    ScoreTwo.textContent=twoScore;
    if(  twoScore == value){
        buttonOne.disabled=true;
        buttonTwo.disabled=true;
        buttonOne.style.backgroundColor="grey";
        buttonTwo.style.backgroundColor="grey";
        buttonOne.style.color="white";
        buttonTwo.style.color="white";
        reset.style.color="white";
        if( oneScore > twoScore )
        para.innerText="Player One Wins";
        else if( oneScore <twoScore)
        para.innerText="player Two Won";
        else
        para.innerText="Match Draw";
        para.style.color="yellow";
        ScoreTwo.style.color="yellow";
    }
}
    });
const upto = document.querySelector('#upto');
let value = upto.options[upto.selectedIndex].value;
upto.addEventListener('change',function(){
    value = upto.options[upto.selectedIndex].value;
    para.innerText = `Lets play till ${value}`;
});
reset.addEventListener('click',function(){
    para.innerText="Lets play";
    para.style.color="white";
    oneScore=0;
    twoScore=0;
    scoreOne.innerText = oneScore;
    ScoreTwo.innerText = twoScore;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonOne.style.backgroundColor="red";
    buttonTwo.style.backgroundColor="yellow";
    buttonOne.style.color="black";
    buttonTwo.style.color="black";
    reset.style.color="black";
    ScoreTwo.style.color="white";
    scoreOne.style.color="white";
    value="none";
    upto.selectedIndex = 0; // upto.value = "none";
});