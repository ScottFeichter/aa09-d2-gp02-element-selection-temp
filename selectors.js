const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seedFruitElements = document.getElementsByClassName("seed");
  const seedFruitNodes = document.querySelectorAll(".seed");
  console.log(seedFruitElements);
  console.log(seedFruitNodes);

  // 2. Get all seedless fruit elements
  // Your code here
  const seedlessFruitElements = document.getElementsByClassName("seedless");
  const seedlessFruitNodes = document.querySelectorAll(".seedless");

  console.log(seedlessFruitElements);
  console.log(seedlessFruitNodes);

  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelector(`.seedless`);
  console.log(firstSeedless);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const youSpan = document.querySelector("#wrapper span");
  console.log(youSpan);

  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapperChildren = document.getElementById("wrapper").children;
  console.log(wrapperChildren);

  // 6. Get all odd number list items in the list
  // Your code here
  const oddsWeirdGrabTWSS = document.querySelectorAll(
    `#two > ol > li:nth-child(even)`
  );
  console.log(oddsWeirdGrabTWSS);
  const oddsHTMLCollection = document.body.getElementsByClassName("odd");
  console.log(oddsHTMLCollection);
  const oddsNodeList = document.querySelectorAll(`#two > ol > .odd`);
  console.log(oddsNodeList);

  // 7. Get all even number list items in the list
  // Your code here
  const evensNodeList = document.querySelectorAll(`#two > ol > li:not(.odd)`);
  console.log(evensNodeList);

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const companiesWithNoClass = document.querySelectorAll(
    `#three a:not([class])`
  );
  console.log(companiesWithNoClass);

  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.querySelectorAll(
    `#three a[href="https://www.amazon.com"]`
  );
  console.log(amazon);

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const listElements = document.querySelectorAll(`.unicorn`);
  console.log(listElements);
  // wrong thing - try to refactor
};

window.onload = select;
