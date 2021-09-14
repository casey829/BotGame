if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
  
  
  const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
    gameOver('win');
  }else if (isBot(door)) {
    gameOver('lose')
  } 
  }
  
  const randomChoreDoorGenerator = () => {
   const choreDoor = Math.floor(Math.random() * numClosedDoors);
   if(choreDoor === 0){
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
  }else{ (choreDoor === 2)
   openDoor3 = botDoorPath;
   openDoor1 = beachDoorPath;
   openDoor2 = spaceDoorPath;
  }
  
  }
  door1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
   doorImage1.src = openDoor1;
   playDoor(door1)
  }
  };
  
  door2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
   doorImage2.src = openDoor2; 
   playDoor(door2)
  }
  };
  door3.onclick = () => {
     if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(door3)
     }
  };
  
  startButton.onclick = () =>{
    if(!currentlyPlaying) {
    startRound();
    }
  }
  const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHtml = 'Good luck!!!';
    randomChoreDoorGenerator();
  }
  
  const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
  }
  
  startRound(); 
  