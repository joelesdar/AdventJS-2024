/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Create an empty array to save the sorted data
  let giftsForSanta = []
  // Filter the valid elements and avoid the duplicated ones
  giftsForSanta = gifts.filter((element, index) => {
    return Number.isInteger(element) && gifts.indexOf(element) === index
  });
  // Sort the elements in ascending order
  giftsForSanta = giftsForSanta.sort((a, b) => a - b)

  return giftsForSanta
}
