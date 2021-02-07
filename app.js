let output = '';
//XML HttpRequest w3
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        //New add|
        //resonseText = can get the data
        //The responseText property returns the server response as a text string.
        console log(this.responseText)
        let data = this.responseText;
        // common use of JSON is to exchange data to/from a web server.
        //When receiving data from a web server, the data is always a string.
        //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        data JSON.parse(data);
        console log(data)
        //XML HttpRequest w3
        //document.getElementById("demo").innerHTML = xhttp.responseText;
        //querSelector= just like the class but in Javascript
        //JavaScript can "display" data in different ways:
        //Writing into an HTML element, using innerHTML.
        document.querySelector(#temp).innerHTML = data.current.temp;
        document.querySelector(#weather).innerHTML = data.current.weather;
       
          //New add
        for (let i = 0; i < data.daily.length; i++) {
            output += `<li>${data.daily[i].temp}<br>${data.daily[i].weather}</li>`;
            
        }

        
        document.querySelector(#forecast).innerHTML = output;
    }
};
//New add
console.log(xhttp)
//XML HttpRequest w3
//data from json and use json name
xhttp.open("Get", "result.json", true);
xhttp.send();