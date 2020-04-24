export default function mergeReducers(reducers) {
  return function(state, action) {
    if(!state) {
      console.log('a', reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {}));
      return reducers.reduce((acc, r) => ({ ...acc, ...r(state, action) }), {});
    } else {
      
      let nextState = state;
      for( const r of reducers) {
        console.log('b', r);
        nextState = r(nextState, action);
      }
      
      return nextState;
    }
  }
}