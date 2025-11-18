// Create a utility function named catchAsync that wraps async route handlers in Express.
// It should take an async function and return a function that executes it and catches any errors,
// forwarding them to the next middleware using next(). Use ES module syntax.

const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default catchAsync;