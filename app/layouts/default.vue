<template>
	<div>
		<app-header />

		<main class="main">
			<div class="wrapper">
				<slot />
			</div>
		</main>

		<footer>Тут будет футер</footer>
	</div>
</template>

<style scoped lang="scss">
.main {
	margin: 35px 0 25px;
	padding: 0 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}
</style>
