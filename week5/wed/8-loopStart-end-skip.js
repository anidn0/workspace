// ** 6
function doThis(start, end, skip) {
        for (let i = start; i > end; i = i - 1) {

            if (i % skip != 0)  {
                console.log(i);
            }
          
        }
      }
      doThis(40, 0, 5)