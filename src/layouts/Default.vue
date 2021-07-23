<template>
  <div class="min-h-screen p-8 font-sans antialiased md:p-24">

      <header class="flex items-center justify-between max-w-5xl mx-auto">
        <a href="/"><img alt="Jamie Watson, Sheffield based software developer" src="../face.svg" class="w-12" /></a>

      </header>
      <div class="max-w-5xl mx-auto mt-8 md:mt-24">
        <slot/>
      </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>