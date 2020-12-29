class Form{

 constructor(){}

 display(){
    var title=createElement('h2');

    title.html("online car racing game");
    title.position(100,0);
    
    var input=createInput("playername");
    var button=createButton("start the game")
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
   
    input.hide();
    button.hide();    

    var name= input.value();
    playerCount= playerCount +1;
    player.updateCount(playerCount);
    player.update(name);
    var greeting=createElement('h3');
    greeting.html("hello " + name +" !")  
    greeting.position(130,160);
    });

 }


}