// const options = [
//   { val: 0, time: "12:00 AM" },
//   { val: 1, time: "1:00 AM" },
//   { val: 2, time: "2:00 AM" },
//   { val: 3, time: "3:00 AM" },
//   { val: 4, time: "4:00 AM" },
// ];
// <option value="0">12:00 AM</option>

const options = Array(24)

const makeOptions = (opts) => {
  for (let i = 0; i < opts.length; i++) {
    const amOrPm = i > 11 ? "PM" : "AM"
    let hour = ""
    if (i === 0) {
      hour = "12"
      console.log(i===0, hour)
    }
    // console.log("hour after if", hour)
    else if (i > 12) {
      hour = (i - 12).toString()
    }
    else {
      hour = i.toString()
      console.log('else...', hour)
    }
    const time = `${hour}:00 ${amOrPm}`
    console.log("time results:", time, hour )
    opts[i] = { val: i.toString(), time: time }
  }
  return opts
};

console.log(makeOptions(options))
