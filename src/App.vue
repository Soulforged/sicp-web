<template>
  <md-app>
    <md-app-toolbar class="md-large md-primary">
      <div class="md-toolbar-section-end">
        SICP: Programming exercises
      </div>
      <div class="md-toolbar-row">
        <span class="md-display-1">Gallery</span>
      </div>
    </md-app-toolbar>
    <md-app-content>
      <main>
        <router-view />
      </main>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: 'app'
}
</script>