// Fetches a JSON file containing the books the old testament from the server
fetch("../json/old-testament.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    const script = Object.keys(data);
    console.log(script);

    // Define a function "function1 that takes two arguments 'script' and 'data'
    function1(script, data);
  });

function function1(script, data) {
  // creates a 'ul' and 'body' elements
  var ul = document.querySelector(".bible_list_old");
  var body = document.querySelector(".old_test_body");
  console.log(ul);

  let h1 = document.createElement("h1");
  var div = document.createElement("div");
  div.classList.add("bible");

  // loops through the 'script' array and creates a list 'li' for each one
  for (let i = 0; i < script.length; i++) {
    var li = document.createElement("li");
    li.textContent = script[i];
    var div2 = document.createElement("div");

    // add event listener 'click' to each 'li' element

    li.addEventListener("click", () => {
      let chapters = Object.keys(data[script[i]]);
      console.log(script[i]);
      let bible = document.querySelector(".bible");

      // new addition
      h1.textContent = script[i];

      // stop
      for (let j = 0; j < chapters.length; j++) {
        let h4 = document.createElement("h4");
        h4.textContent = `Chapter ${chapters[j]}`;
        div2.appendChild(h4);

        // <div>${data[script[i]][chapters[j]]}</div>;

        // Append 'div' to 'body'
      }
      var chap = document.createElement("div");
      chap.classList.add("chapter");
      //   div.replaceChild(chap);
    });

    // Append 'li' to 'ul'
    ul.appendChild(li);
    console.log(JSON.stringify(div2));
  }

  body.append(h1);
  div.replaceChildren(div2);

  body.append(div);
}

// Fetches a JSON file containing the books the new testament from the server
fetch("../json/new-testament.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    const script = Object.keys(data);
    console.log(script);

    // Define a function "function1 that takes two arguments 'script' and 'data'
    function2(script, data);
  });

function function2(script, data) {
  // creates a 'ul' and body elements
  var ul = document.querySelector(".bible_list_new");
  var body = document.querySelector(".new_test_body");
  console.log(ul);

  // loops through the 'script' array and creates a list 'li' for each one
  for (let i = 0; i < script.length; i++) {
    var li = document.createElement("li");
    li.textContent = script[i];

    // add event listener 'click' to each 'li' element
    li.addEventListener("click", () => {
      let chapters = Object.keys(data[script[i]]);
      for (let j = 0; j < chapters.length; j++) {
        var div = document.createElement("div");
        div.innerHTML = `<h1>Chapter ${chapters[j]}</h1><div>${
          data[script[i]][chapters[j]]
        }</div>`;

        // Append 'div' to 'body'
        body.appendChild(div);
      }
    });

    // Append 'li' to 'ul'
    ul.appendChild(li);
  }
}
