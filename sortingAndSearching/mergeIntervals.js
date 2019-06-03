/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeIntervals = function(res, prev, interval) {

    let newInterval = []
    newInterval.push(Math.min(prev[0], interval[0]))
    newInterval.push(Math.max(prev[1], interval[1]))

    if (res.length > 0) {
        let latest = res[res.length - 1]
        if ((newInterval[0] >= latest[0] && newInterval[0] <= latest[1]) || newInterval[0] == latest[1]) {
            return mergeIntervals(res, res.pop(), newInterval)
        }
    }

    res.push(newInterval)
    return newInterval
}
var merge = function(intervals) {
    if (intervals.length == 1) {
        return [...intervals]
    }

    intervals.sort((a, b) => a[0] - b[0])
    let res = []

    let lo = 1
    let prevInterval = intervals[0]
    while(lo < intervals.length) {

        let interval = intervals[lo]

        if (interval[0] >= prevInterval[0] && interval[0] <= prevInterval[1]) {
            prevInterval = mergeIntervals(res, prevInterval, interval)
        } else if (interval[0] == prevInterval[1]) {
            prevInterval = merge(res, prevInterval, interval)
        } else {

            if (lo == 1) {
                res.push(prevInterval)
            }

            prevInterval = interval
            res.push(interval)
        }

        lo++
    }

    return res

};
