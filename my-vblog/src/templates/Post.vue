<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{ $page.post.title }}</h1>
              <!-- <h2 class="subheading">
                Problems look mighty small from 150 miles up
              </h2> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content -->
    <article style="margin-top:3rem;">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-8 col-md-10 mx-auto"
            v-html="mdToHtml($page.post.content)"
          ></div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
  query($id:ID!){
    post:strapiPost(id:$id){
      id
      title
      content
      created_at
      cover{
        url
      }
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown)
    },
  },
  created() {
    console.log(this.baseUrl)
  },
}
</script>

<style></style>
