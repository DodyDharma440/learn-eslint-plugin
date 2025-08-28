var abc = "hello";

const example = <T>() => {
  return "hello" as T;
};

type SomeType = {
  message: string;
};

// Bad
example<{ message: string }>();

// Good
example<SomeType>();
