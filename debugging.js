
const flattened = [[0,1],[2,3],[3,4]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat([0,1])
    }, []);
