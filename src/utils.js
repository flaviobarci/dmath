const stringToElement = setString => {
  let nameExp = /[a-z]/g;
  let name = setString.match(nameExp);
  let valueExp = /-?[0-9]{1,}/g;
  let value = setString.match(valueExp);
  return { [name]: value };
};

const stringToSet = setString => {
  let nameExp = /[A-Z]/g;
  let name = setString.match(nameExp).toString();
  let elementsExp = /-?[0-9]{1,}/g;
  let elements = setString.match(elementsExp) || [];

  return { [name]: elements };
};

const stringToSets = setsString => {
  const setsExp = /[A-Z][ ]{1,}=[ ]{1,}{.*?}/g;

  const setsArray = setsString.match(setsExp);

  let sets = [];

  for (arr in setsArray) {
    sets.push(stringToSet(setsArray[arr]));
  }

  const elementExp = /[a-z][ ]{1,}=[ ]{1,}[0-9]{1,}/g;

  const elementsArray = setsString.match(elementExp);

  for (arr in elementsArray) {
    sets.push(stringToElement(elementsArray[arr]));
  }

  return Object.assign({}, ...sets);
};

module.exports = {
  stringToSets: stringToSets
};
