const fetchAPI = (date) => {
  let result = [];

  // clients need to booking at least 2 hours from now
  for (let i = date.getHours() + 2; i <= 23; i++) {
    result.push(i + ":00");
  }
  return result;
};

const submitAPI = (formData) => true;

export { fetchAPI, submitAPI };
