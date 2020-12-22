// For In Loops are preferable to loop over Objects
const jeopardyWinnings = {
  firstEvent: 1000000,
  secondEvent: 600000,
  thirdEvent: 450000,
  fourthEvent: 16000,
};

for (let props in jeopardyWinnings) {
  console.log(props);
  console.log(jeopardyWinnings[props]);
}

let total = 0;
for (let props in jeopardyWinnings) {
  total += jeopardyWinnings[props];
}

console.log(`Jeopardy winnings total are ${total}`);
