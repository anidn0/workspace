
function moveForward(dist, currentPosition) {   
    const ncurrentPosition = currentPosition + dist;
    if(ncurrentPosition > 0) {directionis = "forward"}else{directionis = "Backward"}
    //const directionis = forward if (ncurrentPosition > 0) else {Backward};
   // if (ncurrentPosition > 0) {const directionis = "Forward"} else { const directionis = "Backward"} 
    console.log('Last position was', currentPosition);
    console.log('Directionis', directionis);
    console.log('New position is', ncurrentPosition);
    return ncurrentPosition , directionis;
}

function moveBackward(dist, currentPosition) {   
    const ncurrentPosition = currentPosition - dist;
    console.log('Last position was', currentPosition);
    console.log('Directionis Now', directionis);
    console.log('New position is', ncurrentPosition);
    return currentPosition += dist, directionis;
}
function turnaround(dist, currentPosition) {   
    const ncurrentPosition = currentPosition - dist;
    console.log('Last position was', currentPosition);
    console.log('Directionis Now', directionis);
    console.log('New position is', ncurrentPosition);
    return currentPosition + dist, directionis;
}

function printLocation(dist, currentPosition) {   
    console.log(ncurrentPosition , directionis, );
    console.log('Directionis Now', directionis);
    console.log('New position is', ncurrentPosition);
    return currentPosition + dist, directionis;
}
console.log(moveForward(-5, 0));
console.log(moveBackward(4, 0 ));
console.log("****");

// if ncp is < 0 direction is backward else foward; 
// constr direction = forward if ncp is > 0 else backward;
    // if (ncurrentPosition > 0) {
    //     directionis = 'forward';
    //   } else {
    //     directionis = 'backward';
    //   }
    //   //return directionis;
    // //}
    //***************
    // function compare(a, b) {
    //     if (a > b) {
    //         return -1;
    //     } else if (a < b) {
    //         return 1;
    //     }
    //     return 0;
    // }

//let directionis = mydirection(currentPosition);
// function mydirection(ncurrentPosition) {
//     if (ncurrentPosition >  0) {
//       return Foward;
//     } else {
//       return Backward;
//     }