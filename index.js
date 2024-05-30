async function callAPI() {
    const url = 'https://chinese-food-db.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '76194d1d7amshec87d0939d3a4ddp1ec1f2jsnbc9a7c0ada9e',
            'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const objects = JSON.parse(result);
        let htmlString = "";
        objects.forEach(element => {
            htmlString += `
        <div class=" card shadow w-25">
                <div class=" card body">
                <h4>id:${element.id}</h4>
                <h5>${element.title}</h5>
                <p>difficulty: ${element.difficulty}</p>
                    <img src="${element.image}" alt="coctails-image" width="300" height="300">
                   
                </div>
            </div>`
        });
        document.getElementById("div1").innerHTML = htmlString;
    } catch (error) {
        console.error(error);
    }
}
callAPI();