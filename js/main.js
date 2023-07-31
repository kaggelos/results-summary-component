async function populateList(url) {
    fetch(url).then((response) => response.json()).then((array) => {
    let sum = 0;
    for (const x of array) {
        document.getElementById("subject-list").innerHTML += 
        '<li style="background-color: hsla(' + x.color + ', 10%); color: hsl('  + x.color + ')"><img class="subject-icon" src='+ x.icon +'></img>'+
        '<div class="subject" id="' + x.category + '">' + x.category + '</div>' + 
        '<div class="subject-grade">' + '<span>' + x.score + '</span> / 100</div></li>';
        sum += x.score;
    };
    const grade = sum/array.length;
    document.getElementById('grade').innerHTML = Math.floor(grade);
    const titles = [
        "Bad",
        "Average",
        "Good",
        "Great"
    ];
    document.getElementById('title').innerHTML = titles[Math.floor(grade/(100/titles.length))];
  });
};

populateList("./js/json/data.json");
