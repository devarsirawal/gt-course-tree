export const getData = (filePath, setData) => {
  fetch(filePath, 
      {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      }
      )
          .then((response) => {
              return response.json();
          })
          .then((myJson) => {
              setData(myJson);
          });
};