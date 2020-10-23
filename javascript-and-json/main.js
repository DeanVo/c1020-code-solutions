var books = [
  {
    isbn: '978-1-56619-909-4',
    title: 'East of Eden',
    author: 'John Steinbeck'
  },
  {
    isbn: '932-4-52212-492-3',
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    isbn: '995-5-34245-530-2',
    title: 'Clifford Gets a Job',
    author: 'Norman Bridwell'
  }
];

console.log('books array: ', books);
console.log('books type: ', typeof books);

var booksJSON = JSON.stringify(books);

console.log('JSON books: ', booksJSON);
console.log('JSON books type: ', typeof booksJSON);

var studentJSON = '{"Number ID": "013293876", "Student": "Dean Vo"}';

console.log('JSON student: ', studentJSON);
console.log('JSON student type: ', typeof studentJSON);

var studentObj = JSON.parse(studentJSON);

console.log('JSON student parse: ', studentObj);
console.log('JSON student parse typeof: ', typeof studentObj);
