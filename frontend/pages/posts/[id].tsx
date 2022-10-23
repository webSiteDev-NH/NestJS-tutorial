import Layout from '../../components/layout'
import { getPost } from '../../lib/posts'

// posts/[id].tsxのpath生成
export async function getStaticPaths() {
  // /posts/1` and `/posts/2
  // /posts/3...はエラー
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false
  }
}

// id取得
export async function getStaticProps({ params }) {
  console.log('id', params.id)
  const postData = getPost(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}
