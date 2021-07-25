export const formatPrereqs = (data) => {
  console.log(data);
  if (data.length !== 0) {
      if (Array.isArray(data)) {
          let condList = [];
          data.slice(1).forEach((item) => {
              condList.push(formatPrereqs(item));
          });
          if (data[0] === "or") {
              return `(${condList.join(" or ")})`;
          } else {
              return `(${condList.join(" and ")})`;
          } 
      } else {
          return `${data["id"]} (${data["grade"]})`;
      }
  } else {
      return "No prereqs";
  }
};

export const formatPostreqs = (data) => {
  return data.length === 0 ? "No postreqs" : data.join(", ");
};

export const classes = (...classList) => classList.filter((c) => c).join(' ');