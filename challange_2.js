function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoints = 5;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoints);
      
      if (demeritPoints > 12) {
        console.log("License suspended! You have more than 12 demerit points.");
      } else {
        console.log(`Demerit points: ${demeritPoints}`);
      }
    }
  }
  
  const speed = prompt("Enter the car's speed (in km/h):");
  calculateDemeritPoints(parseFloat(speed));
  