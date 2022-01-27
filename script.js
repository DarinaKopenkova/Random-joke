const jokes = [
  "A ham sandwich walks into a bar and orders a beer, bartender says “sorry, we don’t serve food here.”",
  "Why did the Clydesdale give the pony a glass of water? Because he was a little horse. It’s okay, we all laugh at bad jokes—they’re actually hilarious!",
  "What do you call a fish without eyes? Fsh.",
  "What do you call an alligator detective? An investi-gator. If you thought this was funny, you’ll love these other hilarious what do you call jokes.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "There are two muffins baking in the oven. One muffin says to the other, “Phew, is it getting hot in here or is it just me?” The other muffin says, “AAAAHHH!! A TALKING MUFFIN!”",
  "What lights up a soccer stadium? A soccer match.",
  "Why shouldn’t you write with a broken pencil? Because it’s pointless.",
  "What’s the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment.",
  "If athletes get athlete’s foot, what do elves get? Mistle-toes.",
  "After a crime, a detective noted that he thought it was foul play. The other detective said, “You mean, he was playing with birds?”",
  "What’s brown and sticky? A stick.",
  "What did the policeman say to his bellybutton? You’re under a vest.",
  "Why do people say “break a leg” when you go on stage? Because every play has a cast.",
  "What do you call a pig that does karate? A pork chop.",
  "What kind of ghost has the best hearing? The eeriest.",
  "Why are there gates around cemeteries? Because people are dying to get in.",
  "Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagels.",
  "When do computers overheat? When they need to vent.",
  "What kind of music do planets like? Neptunes.",
  "Where can you buy chicken broth in bulk? The stock market.",
  "Why do bees have sticky hair? Because they use honeycombs.",
  "How do rabbits travel? By hareplanes.",
  "How do you tell if a vampire is sick? By how much he is coffin.",
  "What do you call a cow with two legs? Lean beef!",
  "What do you call fake spaghetti? An im-pasta.",
  "What did the yoga instructor say when her landlord tried to evict her? Namaste.",
];

function getRandomJokeIndex() {
  return Math.floor(Math.random() * jokes.length);
}

let jokeIndex = getRandomJokeIndex();

function getStoredJokeCount() {
  return localStorage.getItem(jokeIndex) || 0;
}

let jokeCount = getStoredJokeCount();

function updateJokeElement() {
  document.getElementById("text-joke").innerHTML = jokes[jokeIndex];
}

function updateCountElement() {
  document.getElementById("count-number").innerHTML = jokeCount;
}

function initializeCounter() {
  document.getElementById("count-plus").onclick = function () {
    jokeCount++;
    localStorage.setItem(jokeIndex, jokeCount);
    updateCountElement();
  };
}

function initializeJoke() {
  updateJokeElement();

  document.getElementById("main-button").onclick = function showRandomJoke() {
    jokeIndex = getRandomJokeIndex();
    jokeCount = getStoredJokeCount();
    updateJokeElement();
    updateCountElement();
  };
}

initializeJoke();
initializeCounter();
