const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const items = [];
    for (let failure of arr) {
      items.push(`<li class="text-warning">${failure}</li>`);
    }
    const failureItems = items;
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);