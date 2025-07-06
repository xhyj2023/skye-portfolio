const posts = [
  { id: 1, title: 'First Post', body: 'This is the first post.' },
  { id: 2, title: 'Another Post', body: 'More content coming soon.' },
]

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
