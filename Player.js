class Player{
  constructor(){}
  getCount(){
   var playerCountRef= database.ref('playerCount');
   playerCountRef.on("value",function(data) {
       playerCount=data.val();
   })
  }
  
  // update(na){
  // database.ref('player1').update(
    
  //   {
  //     name: na
  //   }
  

  // );
  // }
  update(name){
      var playerIndex="player"+ playerCount;
      database.ref(playerIndex).set({
        name: name
      });
  }

  updateCount(count){
    database.ref('/').update(
       {
          playerCount:count
       }
    );

  }
}