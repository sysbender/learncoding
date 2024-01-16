// pipe - going from left to right

const pipe = (f, g) => (data) => g(f(data));
