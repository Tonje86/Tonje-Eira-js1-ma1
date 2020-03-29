// question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}


// question 2

const heading = document.querySelector("h3");
console.log(heading);


// question 3

heading.style.fontSize = "2em";


// question 4

heading.classList.add("subheading");
console.log(heading.className);


// question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";


// question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catNames(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}
catNames(cats);


// question 8

function catNames(catArray) {
    let newNames;
    for (let i = 0; i < catArray.length; i++) {
        newNames = "<h5>" + catArray[i].name + "</h5>";
    }
}


// question 9



// question 10

