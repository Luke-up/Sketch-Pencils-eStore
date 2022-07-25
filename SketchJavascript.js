let pencilArray = [
    {name :"Excite", colour:"red", description:'The darker tones of Excite tempt you with whispers of danger and secrets.', price:160, imageSRC:'images/red.jpg'},
    {name :"Slumber", colour:"purple", description:'The lush melody of Slumber carries you gently to rest amongst dreams and wishes.', price:160, imageSRC:'images/lilac.jpg'},
    {name :"Clarity", colour:"blue", description:'In the earliest hours of morning we find Clarity, let it in and see your path.', price:160, imageSRC:'images/blue.jpg'},
    {name :"Puzzle", colour:"orange", description:"Enigmas and riddles circle Puzzle, but don't hesitate to pick it up, lest it pass you by.", price:160, imageSRC:'images/orange.jpg'},
    {name :"Spirit", colour:"light blue", description:'Ethereal and elusive, Spririt is fleeting and temporary, keep it close and hold tightly.', price:160, imageSRC:'images/light blue.jpg'},
    {name :"Abyss", colour:"black", description:'Only Abyss.', price:160, imageSRC:'images/black.jpg'},
    {name :"Wonder", colour:"pink", description:"Let Wonder take you away to places you've seen only in the the memories of daydreams.", price:160, imageSRC:'images/pink.jpg'},
    {name :"Holdfast", colour:"green", description:"Grounded in life and collective perspective is Holdfast, sturdy yet flexible.", price:160, imageSRC:'images/green.jpg'},
    {name :"Time", colour:"dark blue", description:"Stern and unyeilding, Time gives us the motivation and the impetus to do what we must.", price:160, imageSRC:'images/dark blue.jpg'},
    {name :"Reality", colour:"yellow", description:"Complex and otherworldly, yet tinged with the spice of nostalgia, Reality calls.", price:160, imageSRC:'images/yellow.jpg'}
]
$(function(){
let cart = [];

function fullCart(){
    if (sessionStorage.getItem("hasCustomerCart") === null) {
        sessionStorage.setItem("customerCart", JSON.stringify(songs));
        sessionStorage.setItem("hasCustomerCart", true);
    } // else statement retrieves the array from session storage and creates the HTML elements
    else {
        songs = JSON.parse(sessionStorage.getItem("customerCart"));
        let i = 0; //declare i as 0 to fetch object at index [0]
        songs.forEach(function (m) { // each object in the array 'songs' will be appended and styled on the html
            let row = document.createElement("tr");
            row.innerHTML = '<th class="tableItems">' + m.song + '</th><td class="tableItems">' + m.artist + '</td><td class="tableItems">' + m.release + '</td><td class="tableItems">' + m.language + '</td><td class="tableItems">' + m.genre + '</td><td class="tableItems">' + m.rating + '</td><td><button onclick="deleteObject(' + i + ')" class="btn">DEL</button><button onclick="editObject(' + i + ')" class="btn">Edit</button></td>';
            row.classList.add("container");
            row.classList.add("tableItems");
            row.classList.add("border-bottom");
            i += 1; // i is incremented to match the index of the object
            //Created elements are appended to the HTML 
            table.appendChild(row);
        })
    }
}



let i=0;
pencilArray.forEach(function() {
    let holder = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('p');
    let button = document.createElement('button');
    let caption = document.createElement('div')
    let container = document.getElementById('pencilContainer');
    holder.setAttribute("class","col-lg-4 col-sm-6 col-12 mt-2")
    image.src = pencilArray[i].imageSRC;
    name.innerHTML = pencilArray[i].name;
    button.innerHTML = 'Buy';
    image.setAttribute("onclick","openModal("+i+")");
    image.setAttribute("class","item img-thumbnail");
    button.setAttribute("onclick","quickAdd("+i+")");
    caption.setAttribute("class","caption w-100 d-flex fs-3");
    button.setAttribute("class","btn border-dark addButton h-75");
    i+=1;
    holder.appendChild(image);
    caption.appendChild(name);
    caption.appendChild(button);
    holder.appendChild(caption);
    container.appendChild(holder);
})

$('#modalClose').click(function(){
    $('#modalBackground').hide();
})
function quickAdd(i){
    
}
})

