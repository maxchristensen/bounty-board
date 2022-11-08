var swiper = new Swiper(".mySwiper", {
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    pagination: {
      el: ".swiper-pagination",
    },
  });

var bounties = [
    {
        name: "Freddy Krueger",
        image: "img/img1.jpg",
        type: "Demon",
        reward: "$2,000,000",
        partySize: "1",
        description: "",
    },

    {
      name: "The Gremlins",
      image: "img/img2.jpeg",
      type: "Creature",
      reward: "$500,000",
      partySize: "6",
      description: "",
  },

  {
    name: "E.T.",
    image: "img/img3.jpeg",
    type: "Creature",
    reward: "$100,000",
    partySize: "2",
    description: "",
},

{
  name: "Daniel Cleaver",
  image: "img/img4.jpeg",
  type: "Humanoid",
  reward: "$1",
  partySize: "1",
  description: "",
},

{
  name: "Cthulhu",
  image: "img/img5.jpeg",
  type: "Great Old One",
  reward: "$10,000,000",
  partySize: "10",
  description: "",
},

{
  name: "Twek Doomtail",
  image: "img/img4.jpeg",
  type: "Creature",
  reward: "$300,000",
  partySize: "3",
  description: "",
},

{
  name: "Leonhart",
  image: "",
  type: "Humanoid",
  reward: "$750,000",
  partySize: "2",
  description: "",
},
]


// Get all filter inputs
var reward = document.getElementById('selectReward');
var kind = document.getElementById('selectKind');
var partySize = document.getElementById('selectPartySize');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Add event listeners to the filter inputs
reward.addEventListener('change', filterReward);
kind.addEventListener('change', filterKind);
partySize.addEventListener('change', filterPartySize);

rewardFilterTitle.addEventListener('click', function(){
  return getAllBounties();
})

search.addEventListener('click', searchBounties);

searchInput.addEventListener('keyup', function(event){
  var input = event.target.value;
  var bountiesOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');
  bountiesOutput.innerHTML = " ";
  for (let i = 0; i < bounties.length; i++) {
    if (bounties[i].name.toLowerCase().includes(input.toLowerCase())) {
      var bounty = bounties[i];
      bountiesOutput.innerHTML +=
      `
      <div class="col-3">
        <div class="card rounded-4">
            <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
            <div class="card-body">
              <h2 class="card-text text-center">${bounty.name}</h2>
              <h4 class="card-text text-center">${bounty.reward}</h4>
            </div>
        </div>
      </div>
      `
    }
    
  }
})

// create the functions for each individual filter
function filterReward() {
  var bountyOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');
  bountyBoard.innerHTML = " ";
  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      if (reward.value === bounty.reward) {
          bountyOutput.innerHTML += 
            `
            <div class="col-3">
              <div class="card rounded-4">
                  <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
                  <div class="card-body">
                    <h2 class="card-text text-center">${bounty.name}</h2>
                    <h4 class="card-text text-center">${bounty.reward}</h4>
                  </div>
              </div>
            </div>
            `
    }
  }
}

function filterKind() {
  var bountyOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');

  bountyBoard.innerHTML = " ";
  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      if (partySize.value === bounty.partySize) {
          bountyOutput.innerHTML += 
            `
            <div class="col-3">
              <div class="card rounded-4">
                  <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
                  <div class="card-body">
                    <h2 class="card-text text-center">${bounty.name}</h2>
                    <h4 class="card-text text-center">${bounty.reward}</h4>
                  </div>
              </div>
            </div>
            `
    }
  }
}

function filterPartySize() {
  var bountyOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');
  bountyBoard.innerHTML = " ";
  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      if (reward.value === bounty.reward) {
          bountyOutput.innerHTML += 
            `
            <div class="col-3">
              <div class="card rounded-4">
                  <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
                  <div class="card-body">
                    <h2 class="card-text text-center">${bounty.name}</h2>
                    <h4 class="card-text text-center">${bounty.reward}</h4>
                  </div>
              </div>
            </div>
            `
    }
  }
  
}

// insert all of our data from our array into bootstrap cards on the DOM
function getAllBounties() {
  var bountyOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');

  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      if (i <= 3) {
        bountyOutput.innerHTML += 
          `
          <div class="col-3">
            <div class="card rounded-4">
                <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
                <div class="card-body">
                  <h2 class="card-text text-center">${bounty.name}</h2>
                  <h4 class="card-text text-center">${bounty.reward}</h4>
                </div>
            </div>
          </div>
          `
      } else bountyOutput2.innerHTML += `
      <div class="col-3">
        <div class="card rounded-4">
            <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
            <div class="card-body">
              <h2 class="card-text text-center">${bounty.name}</h2>
              <h4 class="card-text text-center">${bounty.reward}</h4>
            </div>
        </div>
      </div>
      `
  }
}
getAllBounties();

// insert data from our array into our filters
function getAllRewards() {
  var rewardOutput = document.getElementById('selectReward');
  for(var i = 0; i < bounties.length; i++) {
    var bountyReward = [bounties[i].reward];
    bountyReward.sort(function(a, b) {
      return parseInt(a) - parseInt(b)
    });
    rewardOutput.innerHTML +=
      `<option value="${bountyReward}">${bountyReward}</option>`
  }
}
getAllRewards();

// 


function getAllKinds() {
  var kindOutput = document.getElementById('selectKind');
  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      kindOutput.innerHTML +=
          `<option value="${bounty.type}">${bounty.type}</option>`
  }
}
getAllKinds();


function getAllPartySizes() {
  var partySizeOutput = document.getElementById('selectPartySize');
  for(var i = 0; i < bounties.length; i++) {
      var bounty = bounties[i];
      partySizeOutput.innerHTML +=
          `<option value="${bounty.partySize}">${bounty.partySize}</option>`
  }
}
getAllPartySizes();

function searchBounties(){
  var bountiesOutput = document.getElementById('bountyBoard');
  var bountyOutput2 = document.getElementById('bountyBoard2');

  bountiesOutput.innerHTML = " ";
  var searchValue = searchInput.value;
  for (let i = 0; i < bounties.length; i++) {
    var bounty = bounties[i];
    if (searchValue.toLowerCase() == bounty.title.toLowerCase()) {
      bountiesOutput.innerHTML +=
      `
      <div class="col-3">
        <div class="card rounded-4">
            <img src="${bounty.image}" class="card-img-top" alt="image of ${bounty.name}">
            <div class="card-body">
              <h2 class="card-text text-center">${bounty.name}</h2>
              <h4 class="card-text text-center">${bounty.reward}</h4>
            </div>
        </div>
      </div>
      `
}}}