

const form = document.querySelector("#meme-form");

// listen for when the user submits the form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const imageUrlInput = document.querySelector("#image-url").value;
    const topTextInput= document.querySelector("#top-text-input").value;
    const bottomTextInput = document.querySelector("#bottom-text-input").value;
    const topTextP = document.createElement("p");
    const bottomTextP = document.createElement("p");
    const imgP = document.createElement("img");
    imgP.setAttribute('id', 'img');
    const memeDiv = document.createElement("div");
    memeDiv.setAttribute('class','meme-div')
    const deleteBtn = document.createElement("button");

    topTextP.innerText = topTextInput;
    topTextP.setAttribute('id', 'top-text');
    bottomTextP.innerText = bottomTextInput;
    bottomTextP.setAttribute('id', 'bottom-text');
    imgP.src = imageUrlInput;
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute('id','delete-btn');
    deleteBtn.addEventListener("click", function(e){
        e.target.parentElement.remove();

    })

    memeDiv.appendChild(deleteBtn);
    memeDiv.appendChild(topTextP);
    memeDiv.appendChild(imgP);
    memeDiv.appendChild(bottomTextP);

    const parentMemeDiv = document.querySelector("#meme");
    parentMemeDiv.append(memeDiv);
    form.reset();
});
