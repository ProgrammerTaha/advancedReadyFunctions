const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = veg => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const acceptAnything = veg => {
  console.log(`Ok, I guess I will eat some ${veg}.`);
};


const declineEverything = arr => {
  arr.forEach(politelyDecline);
};

const acceptEverything = (arr) => {
  arr.forEach(acceptAnything);
};

// declineEverything(veggies);
// acceptEverything(veggies);
