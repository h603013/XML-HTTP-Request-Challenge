//Create a variable and store a new XMLHttpRequest 
//Apply the XMLHttpRequest open("GET", "results.json", true) method to the variable
//Apply the XMLHttpRequest send() method to the variable
let output = '';

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let data = this.responseText;
        data = JSON.parse(data);
        console.log(data);
        document.querySelector('#temp').innerHTML = data.current.temp;
        document.querySelector('#weather').innerHTML = data.current.weather;

        for(let i = 0; i < data.daily.length; i++) {
            output +=  `<li>${data.daily[i].temp}<br>${data.daily[i].weather}</li>`;
        }

        document.querySelector('#forecast').innerHTML = output;
    }
}
console.log(xhttp);
xhttp.open('GET', 'results.json', true);
xhttp.send();