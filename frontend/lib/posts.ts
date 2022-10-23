interface Post {
  title: string;
  id: number;
  date: string;
}

export function getPost(id: number) {
  // Returns an array that looks like this:
  const posts: Post[] = [
    {
      title: 'title1',
      id: 1,
      date: '2022-10-23'
    },
    {
      title: 'title2',
      id: 2,
      date: '2022-10-24'
    }
  ]
  return posts[id - 1]
}
