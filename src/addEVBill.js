// Function that calculates the users additional yearly bill based off of RATE A

// INPUTS:
// Which rate they are currently on: RATE A
// How many miles the user will drive per year

// rate A is $0.15 kW per hour
// Usually, an EV consumes about 0.3 kWh per mile driven.

function calcEVBillA (miles) {
  // Find the daily cost * 365
  // Take the mi/yr * 0.3 kWh/mile = kWh per year
  // Divide by 365 days for kWh per day
  const kWhDay = miles * 3 / 10 / 365
  const costPerDay = kWhDay * 15 / 100
  const costPerYear = costPerDay * 365
  return costPerYear.toFixed(2)
}

module.exports = calcEVBillA
