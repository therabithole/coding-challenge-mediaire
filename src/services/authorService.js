export const authors = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Max Mustermann" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Jane Doe" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "John Doe" }
  ];
  
  export function getAuthors() {
    return authors.filter(author => author);
  }
  