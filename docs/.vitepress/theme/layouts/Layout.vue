<template>
  <Layout>
    <template #page-top>
      <h1 :id="componentName">{{ componentName }}</h1>
    </template>
    <template #page-bottom>
      <div class="docs-link">
        <a :href="getElementDoc(name, 'gitee', 'zh-CN')" target="_blank">
          📖 Element 文档 | {{ componentName }}
        </a>
        <a :href="getElementDoc(name)" target="_blank">
          📖 Element Docs | {{ capitalize(name) }}
        </a>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { capitalize, computed } from "vue";
import Layout from "vitepress/dist/client/theme-default/Layout.vue";
import { useData } from "vitepress";

const { page, frontmatter } = useData();

const name = computed(() => {
  const path = page.value.relativePath;
  const filename = path.split("/").slice(-1)[0];
  const name = filename.slice(0, filename.indexOf("."));
  return name;
});

const componentName = computed(() => {
  return capitalize(name.value) + " " + (frontmatter.value.title || "");
});

function getElementDoc(
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
}
</script>

<style lang="scss">
.docs-link {
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  padding: 1.5rem 0;
}
</style>
