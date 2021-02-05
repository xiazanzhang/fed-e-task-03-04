<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{ general.title }}</h1>
        <h2 class="hero-subtitle">
          {{ general.subtitle }}
        </h2>
      </div>
      <div
        class="projects"
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
      >
        <div class="project">
          <g-link class="project-link" :to="'/post/' + edge.node.id">
            <img
              :src="baseUrl + edge.node.cover.url"
              width="2560"
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
            <h3 class="project-title">{{ edge.node.title }}</h3>
            <div class="categories">
              <span v-for="tag in edge.node.tags" class="category">{{
                tag.title
              }}</span>
            </div></g-link
          >
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link
            v-for="post in $page.newPosts.edges" :key="post.id"
            :to="'/post/' + post.node.id"
            class="journal"
          >
            <h3 class="journal-title">
              {{ post.node.title }}
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query($page:Int){
    posts:allStrapiPost(perPage:10,page:$page) @paginate{
      totalCount
      pageInfo{
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          content
          created_at
          cover{
            url
          }  
          tags{
            id
            title
          }
        }
      }
    }
    general:allStrapiGeneral{
      edges{
        node{
          id
          title
          subtitle
          cover{
            url
          }          
        }
      }
    }
    newPosts:allStrapiPost(limit:4,order:DESC){
      edges{
        node{
          id
          title
          created_at
          tags{
            title
          }
          cover{
            url
          }  
        }
      }
    }
  }
</page-query>

<script>
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    general() {
      return this.$page.general.edges[0].node
    },
  },
}
</script>

<style></style>
