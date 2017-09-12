<template>
  <div>
    <v-breadcrumb :items="items1"></v-breadcrumb>
    <v-breadcrumb :items="items2"></v-breadcrumb>
    <v-breadcrumb :items="items3"></v-breadcrumb>

    <v-code>
      <script type="text/plain">
      <v-breadcrumb :items="items1"></v-breadcrumb>
      <v-breadcrumb :items="items2"></v-breadcrumb>
      <v-breadcrumb :items="items3"></v-breadcrumb>
      </script>
    </v-code>
    <v-code lang="language-js">
      export default {
        data() {
          return {
            items1: [
              {text: 'Home', href: '/home'}
            ],
            items2: [
              {text: 'Home', href: '/home'},
              {text: 'Library', href: '/home/library'}
            ],
            items3: [
              {text: 'Home', href: '/home'},
              {text: 'Library', href: '/home/library'},
              {text: 'Data', href: '/home/library/data'}
            ]
          };
        }
      };
    </v-code>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items1: [
          {text: 'Home', href: '/home'}
        ],
        items2: [
          {text: 'Home', href: '/home'},
          {text: 'Library', href: '/home/library'}
        ],
        items3: [
          {text: 'Home', href: '/home'},
          {text: 'Library', href: '/home/library'},
          {text: 'Data', href: '/home/library/data'}
        ]
      };
    }
  };
</script>
