
function getData(value) {

// Data generator

const initialPrice = 100
const flipMultiple = 1.5
// const initialDistributionRate = 0.1
const initialDistributionRate = parseFloat(value) / 100
const distributionReductionRate = 0.01

function getCurrentDistributionRate(round) {
  return initialDistributionRate - distributionReductionRate * (round)
}

function getCurrentPrice(round) {
  const multiplier = Math.pow(flipMultiple, round)
  return initialPrice * multiplier
}

function getRoyalty(round, discributionRate) {
  return getCurrentPrice(round) * discributionRate
}

const orders = ["1st", "2nd", "3rd", "4th", "5th", "6th"]
const owners = ["Alice", "Bob", "Cathy", "Darren", "Emily", "Frank"]

// Loop through
const arr = [];
for (const i in orders) {
  // Logging
  console.log(`-- round[${i}] --`)
  console.log("Current price", getCurrentPrice(i))
  console.log("Current distrubution rate", getCurrentDistributionRate(i))
  for (const j in owners) {
    console.log(`Royalty of ${owners[j]}`, getRoyalty(i, getCurrentDistributionRate(j)))
  }
  console.log("--")
  // Pushing
  const obj = owners.reduce((acc, elem, index) => {
    let royalty = getCurrentDistributionRate(index) * getCurrentPrice(i)
    royalty = (Math.round(royalty * 100) / 100).toFixed(2);
    if (index > i) {
      royalty = 0
    }
    acc[elem] = royalty // or what ever object you want inside
    return acc
  }, {})
  console.log(obj)
  arr.push({
    "order": orders[i],
    ...obj
  })
}

  console.log(arr)
  return arr
}

export default getData
