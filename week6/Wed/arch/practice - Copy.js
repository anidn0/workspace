       
        const q5 = document.getElementById('alert-button');
        const newP = document.createElement('p');
        const newContent = "Alert";
        function clickHandler() {
            parentNode.append(newP)
            newP.append(newContent);
        }
        
        q5.addEventListener("click", clickHandler);