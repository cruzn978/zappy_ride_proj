// Function that calculates the users additional yearly bill based off of RATE A

// rate A is $0.15 kW per hour
// An EV consumes about 0.3 kWh per mile driven.

function costPerDay(kWhDay, start, end) {
  let cost = 0
  while (kWhDay > 0 && start !== end) {
    if (start === 24) start = 0
    kWhDay < 1 ? cost += (15 / 100 * kWhDay) : cost += 0.15
    kWhDay--
    start++
  }
  return cost.toFixed(2)
}

function calcEVBillA (miles, start, end) {
  // Find how many hours a day they charge the EV
  let hours = 0
  end > start ? hours = end - start : hours = (24 - (start - end))
  // Find the kWh/day
  // take the mi/yr * 0.3 kWh/mile = kWh per year
  // divide by 365 days
  const kWhDay = miles * 3 / 10 / 365 //~2.4657/day
  const dailyCost = costPerDay(kWhDay, start, end)
  return (dailyCost * 365).toFixed(2)
}
console.log(calcEVBillA(3000, 20, 23))

module.exports = calcEVBillA
