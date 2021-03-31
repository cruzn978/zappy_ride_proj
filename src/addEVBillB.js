// Function that calculates the users additional bill based off of RATE B and the charging times*
// rate B is $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise

function costPerDay(kWhDay, start, end) {
  let cost = 0
  // evaluate each hour (peak/offpeak) and add either an hour or the remainder * appropriate rate
  while (kWhDay > 0 && start !== end) {
    if (start === 24) start = 0
    if (start >= 12 && start <= 17 ) {
      kWhDay < 1 ? cost += (20 / 100 * kWhDay) : cost += (20 / 100)
    } else {
      kWhDay < 1 ? cost += (8 / 100 * kWhDay) : cost += (8 / 100)
    }
    kWhDay--
    start++
  }
  return cost
}

function calcEVBillB (miles, start, end) {
  // Find the kWh/day
  // take the mi/yr * 0.3 kWh/mile = kWh per year
  // divide by 365 days

  const kWhDay = miles * 3 / 10 / 365
  const dailyChargingCost = costPerDay(kWhDay, start, end)
  const costPerYear = dailyChargingCost * 365
  return costPerYear.toFixed(2)
}
module.exports = calcEVBillB
