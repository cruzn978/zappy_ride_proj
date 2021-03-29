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
  const dailyCost = costPerDay(kWhDay, start, end)
  const costPerYear = dailyCost * 365
  return costPerYear.toFixed(2)
}
module.exports = calcEVBillB
// mock time slots: use 24 hour time
// all noon-6pm (peak hours)
// 12:00 - 181:00
// 13:00 - 17:00
// 14:00 - 15:00

// all 6pm-12pm (off peak hours only within a day)
// 18:00 - 23:00
// 18:00 - 00:00
// 00:00 - 12:00

// cont. with overnight charging? maybe calculate how peak/off peak hours!
// 18:00 - 12:00 = 18 hrs off peak
// 17:00 - 5:00
// 23:00 - 11:00

// combinations
// 12:00 - 19:00 (12-7pm: 1 hr overlap with off peak at the end)
// 17:00 - 5:00(5pm-5am: 1hr overlap peak followed by 11 hours off peak overnight)
