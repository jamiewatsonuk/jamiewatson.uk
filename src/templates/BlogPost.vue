<template>
    <Layout>
        <h1 class="font-serif text-5xl font-bold">{{ $page.post.title }}</h1>
        <div class="mt-6 prose prose-lg" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query BlogPost ($id: ID!) {
  post: blogPost (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>