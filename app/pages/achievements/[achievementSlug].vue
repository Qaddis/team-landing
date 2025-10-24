<script setup lang="ts">
const route = useRoute()
</script>

<template>
	<div>
		<h1>Страница достижения</h1>

		<p>Slug достижения: {{ route.params.achievementSlug }}</p>
	</div>
</template>

<style scoped lang="scss"></style>
