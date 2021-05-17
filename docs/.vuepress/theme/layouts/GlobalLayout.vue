<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <Layout>
    <template #page-bottom>
      <div class="text-center">
        <a :href="getElementDoc(name)" target="_blank">
          Element 文档 | {{ componentName }}
        </a>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
import { capitalize } from "../utils.js";

export default defineComponent({
  components: { Layout },
  mounted() {
    const defaultContainer = document.getElementsByClassName(
      "theme-default-content"
    )[0];
    const header = document.createElement("h2");
    header.textContent = this.componentName;
    defaultContainer.insertAdjacentElement("afterbegin", header);
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
    /**
     * name 组件名
     */
    getElementDoc(name) {
      const componentsUrl = "https://element.eleme.cn/#/zh-CN/component/";
      return `${componentsUrl}${name}`;
    },
  },
});
</script>

<style>
.text-center {
  text-align: center;
}
</style>
