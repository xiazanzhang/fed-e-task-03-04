<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query{
  posts:allPost{
    edges{
      node{
        id
        title
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  name: 'Posts2',
}
</script>

<style></style>
