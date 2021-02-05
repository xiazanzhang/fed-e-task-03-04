<template>
  <ul>
    <li v-for="item in posts" v-key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Posts1',
  data() {
    return {
      posts: [],
    }
  },
  async created() {
    const { data } = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    )
    this.posts = data
  },
}
</script>

<style></style>
