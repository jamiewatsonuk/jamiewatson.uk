<template>
  <Layout>
    <div class="prose prose-lg">
      <h1 class="font-serif">Hello!</h1>
      <p>
        I'm Jamie, a software developer based in Sheffield, England.  I develop mainly in PHP using Laravel (with Vue/Tailwind for the frontend) but have experience in a range of other technologies such as GCP, Serverless and Node.
      </p>
      <div class="flex items-center space-x-6">
        <a href="https://twitter.com/jamiewatsonuk" rel="nofollow noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke-width="2"
            display="block"
            id="TwitterFill"
          >
            <path
              d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
            />
          </svg>
          <span class="sr-only">Twitter</span>
        </a>
        <a href="https://github.com/jamiewatsonuk/" rel="nofollow noreferrer" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke-width="2"
            display="block"
            id="GithubFill"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          <span class="sr-only">Github</span>
        </a>
      </div>
    </div>

    <template v-for="post in $page.posts.edges">
      <div class="max-w-xs my-12 border-t"></div>
      <Post :post="post.node" />
    </template>
  </Layout>
</template>

<script>
import Post from "../components/Post.vue"

export default {
  components: {Post},

  metaInfo: {
    title: "Home",
  },
};
</script>

<page-query>
query {
  posts: allBlogPost (sort: [{ by: "date", order: DESC }, { by: "title", order: ASC }]) {
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>
