/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Get the maximun length of the given names
  const maxLength = Math.max(...names.map(name => name.length))
  // Create the top and bottom border line
  const line = "*".repeat(maxLength + 4)
  // Frame the names by adding the necessary blank spaces and the borders
  const framedNames = names.map(name => {
    let framedName = name
    while(framedName.length !== maxLength) framedName += " "
    return `* ${framedName} *`
  })
  // Build the frame by joining all the text lines
  const result = [line, ...framedNames, line].join("\n")

  return result
}
