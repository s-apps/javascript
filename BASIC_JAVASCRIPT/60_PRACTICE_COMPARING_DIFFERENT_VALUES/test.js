function compareEquality(a, b) {
  if (typeof a === typeof b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");