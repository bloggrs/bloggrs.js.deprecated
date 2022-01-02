class BloggrsAPI {
  constructor({ blog_id, secret }) {
    this.blog_id = blog_id;
    this.secret = secret;
    this.base_url = "http://localhost:4000/api/v1";
  }
  async getCategories() {
    const res = await fetch(
      `${this.base_url}/blogs/${this.blog_id}/categories`
    );
    const {
      data: { categories },
    } = await res.json();
    return categories;
  }
  async getPosts() {
    const res = await fetch(
      `${this.base_url}/blogs/${this.blog_id}/posts`
    );
    const {
      data: { posts },
    } = await res.json();
    return posts;
  }
  async getPages() {
    const res = await fetch(
      `${this.base_url}/blogs/${this.blog_id}/pages`
    );
    const {
      data: { pages },
    } = await res.json();
    return pages;
  }
  async getBlog() {
    const res = await fetch(
      `${this.base_url}/blogs/${this.blog_id}`
    );
    const {
      data: { blog },
    } = await res.json();
    return blog;
  }
}

export default BloggrsAPI