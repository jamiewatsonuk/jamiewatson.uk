<template>
    <div>
      <h2 class="relative font-serif text-4xl font-bold">
        <a class="inline-block p-0 transition duration-300 group text-decoration hover:text-decoration-underline hover:text-decoration-gray-300" :href="post.path">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 hidden w-5 h-5 -mt-2 -ml-8 text-gray-300 transition duration-300 md:block group-hover:text-gray-400 top-1/2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
          </svg>
          {{ post.title }}
        </a>
      </h2>
      <div class="mt-6 prose prose-lg">
        <p>{{ post.excerpt }}</p>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>
