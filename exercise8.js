const library = {
    name: 'City Library',
    books: [],
};

function addBook(title, author, isbn) {
    library.books.push({
        title,
        author,
        isbn
    });
}


function findBookByTitle(title){
    return library.books.find(book => book.title === title);
};

function listAllBooks(){
    return library.books;
};

const universityLibrary = Object.create(library);
universityLibrary.books = [];
universityLibrary.courses = [];


function addCourseBook(courseName, title, author, isbn){
    universityLibrary.courses.push(courseName);
    universityLibrary.books.push({
        title: title,
        author: author,
        isbn: isbn,
    });
}

addBook('1984', 'George Orwell', '978-0451524935');
addBook('To Kill a Mockingbird', 'Harper Lee', '978-0061120084');
addBook('The Great Gatsby', 'F. Scott Fitzgerald', '978-0743273565');

console.log(findBookByTitle('1984')); //title: '1984'
console.log(findBookByTitle('lalalal'))//null
console.log(listAllBooks()); //list of all books
addCourseBook('Computer Science', 'Introduction to Algorithms', 'Thomas H. Cormen', '978-0262033848');
console.log(universityLibrary.courses);
