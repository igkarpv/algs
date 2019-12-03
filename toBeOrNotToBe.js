const toBeOrNotToBe = (universe) => {
  const data = universe[Math.floor(Math.random() * universe.length - 1)]
  return toBeOrNotToBe([data])
}

toBeOrNotToBe([])
