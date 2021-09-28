<template>
  <Layout>
    <template #page-top>
      <h2 class="component-header">{{ componentName }}</h2>
    </template>
    <template #page-bottom>
      <div class="docs-link">
        <a :href="getElementDoc(name, 'gitee', 'zh-CN')" target="_blank">
          Element 文档 | {{ componentName }}
        </a>
        <a :href="getElementDoc(name)" target="_blank">
          Element Docs | {{ capitalize(name) }}
        </a>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, capitalize } from "vue";
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default defineComponent({
  components: {
    Layout,
  },
  computed: {
    name() {
      const path = this.$page.path;
      const filename = path.split("/").slice(-1)[0];
      const name = filename.slice(0, filename.indexOf("."));
      return name;
    },
    componentName() {
      return capitalize(this.name) + " " + (this.$frontmatter.title || "");
    },
  },
  methods: {
    capitalize,
    getElementDoc(
      name: string,
      type: "github" | "gitee" = "github",
      language: "zh-CN" | "en-US" = "zh-CN"
    ) {
      let docsUrl = "https://element-plus.org";
      if (type === "gitee") {
        docsUrl = "https://element-plus.gitee.io";
      } else if (type === "github") {
        docsUrl = "https://element-plus.org";
      }
      return `${docsUrl}/#/${language}/component/${name}`;
    },
  },
});
</script>

<style lang="scss">
.component-header {
  padding-left: 2.5rem;
}

.docs-link {
  display: flex;
  justify-content: space-between;

  padding: 0 2.5rem;
}
</style>
