import Main from './Main'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

export default async function Page() {
  const posts: CoreContent<Blog>[] = allCoreContent(sortPosts(allBlogs)).slice(0, 9)
  return <Main posts={posts} />
}
