
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return peopleInSpace["number"]
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
  return peopleInSpace["people"].map((elt) => {
    return elt["name"]
  })
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
    let list = peopleInSpace["people"].map((elt) => {
      return elt["craft"]
    })
    let set = new Set(list)
    console.log(set)
    return set.size == 1
  }
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
  return peopleInSpace["message"] == "success"
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
  let people = peopleInSpace["people"].map((elt) => {
    return elt["name"]
  })
  if(people.indexOf("Joe Acaba")){
    return "in space!"
  }else{
    return "dunno."
  }
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
