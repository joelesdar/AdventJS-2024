/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  // Code here
  let giftsForSanta = [];
  giftsForSanta = gifts.filter((element, index) => {
    return Number.isInteger(element) && gifts.indexOf(element) === index;
  });

  giftsForSanta = giftsForSanta.sort((a, b) => a - b);

  return giftsForSanta;
}
