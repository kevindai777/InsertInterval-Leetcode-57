//Objective is to insert a start and end time into a list of intervals

let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]


//O(n) greedy solution where n is the length of the intervals

let result = []
let index = 0

//If the interval's end time is before the new interval's start time
//[1,2] && [4,8], 2 < 4
//[3,5] && [4,8], 5 > 4 so end here
while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index])
    index++
}

//From the previous loop, we've found the interval w/ an end time greater than our inserted start time
//Keep doing this new operation as long as the interval's start time is <= the inserted end time
//[3,5] && [4,8], 3 <= 8 so keep going
//[6,7] && [3,8], 6 <= 8 so keep going
//[8,10] && [3,8], 8 == 8 so keep going
//[12,16] && [3,10], 12 > 10 so end here and place [3,10] in
while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0])
    newInterval[1] = Math.max(newInterval[1], intervals[index][1])
    index++
}

result.push(newInterval)

while (index < intervals.length) {
    result.push(intervals[index])
    index++
}

return result