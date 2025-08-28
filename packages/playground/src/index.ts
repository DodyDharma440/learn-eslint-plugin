var abc = "hello";

const example = <T>() => {
  return "hello" as T;
};

interface Message {
  message: string;
}

interface Hello {
  hello: string;
}

type SomeType = Message & Hello;

type SomeType2<T> = { value: T };

// Bad
example<{ message: string }>();

// Good
example<SomeType>();
