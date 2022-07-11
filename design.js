let but = document.getElementById("butt");

function gettime() {
    const d = new Date();
    var date=d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    var time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    
    document.getElementById("time").innerHTML=`<h1>your time on ${date} is ${time}</h1>`;
}