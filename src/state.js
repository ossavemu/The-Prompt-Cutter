export const stateService = {
  get: () => JSON.parse(localStorage.getItem('state')),
  set: (value) => localStorage.setItem('state', JSON.stringify(value)),
  getLimit: () => JSON.parse(localStorage.getItem('limit')),
  setLimit: (value) => localStorage.setItem('limit', JSON.stringify(value)),
  getLast: () => JSON.parse(localStorage.getItem('last')),
  setLast: (value) => localStorage.setItem('last', JSON.stringify(value)),
};
