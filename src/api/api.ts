export const appApi = {
  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json()
  },

  getUsers: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    return await response.json();
  },
};
