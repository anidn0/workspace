
function moveForward(dist) {   
    let currentPosition 
    const ncurrentPosition = currentPosition + dist;
    if(ncurrentPosition > 0) {directionis = "forward"}else{directionis = "Backward"}
    console.log('Last position was', currentPosition);
    console.log('Directionis', directionis);
    console.log('New position is', ncurrentPosition);
    return ncurrentPosition , directionis;
}

// function moveBackward(dist) {   
//     const ncurrentPosition = currentPosition - dist;
//     if(ncurrentPosition > 0) {directionis = "forward"}else{directionis = "Backward"}
//     console.log('Last position was', currentPosition);
//     console.log('Directionis Now', directionis);
//     console.log('New position is', ncurrentPosition);
//     return currentPosition += dist, directionis;
// }
// function turnaround(dist) {   
//     const ncurrentPosition = currentPosition - dist;
//     if(ncurrentPosition > 0) {directionis = "forward"}else{directionis = "Backward"}
//     console.log('Last position was', currentPosition);
//     console.log('Directionis Now', directionis);
//     console.log('New position is', ncurrentPosition);
//     return currentPosition + dist, directionis;
// }

// function printLocation(dist, currentPosition) {   
//     console.log(ncurrentPosition , directionis, );
//     console.log('Position is ', ncurrentPosition);
//     console.log('New position is', ncurrentPosition);
//     return currentPosition + dist, directionis;
// }
console.log(moveForward(5));
//console.log(moveBackward(3));
console.log("****");
