let baseURL = "http://numbersapi.com"
let ourFirstPromise = axios.get(baseURL);
let faveNum = 16
let multNums = [1, 2, 3]

$.getJSON(`${baseURL}/${faveNum}?json`)
    .then(data=> {
        console.log(data);
    }) 

$.getJSON(`${baseURL}/${multNums}?json`)
    .then(data=> {
        console.log(data);
    }) 


let fourFacts = [];

    for (let i = 1; i < 5; i++) {
        fourFacts.push(
            $.getJSON(`${baseURL}/${faveNum}?json`)
        );
    }

    Promise.all(fourFacts)
      .then(newArr => (
        newArr.forEach(p => $("body").append(`<p>${p.text}</p>`))
      ))
      .catch(err => console.log(err));

      console.log(fourFacts.data)





