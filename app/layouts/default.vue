<template>
	<div>
		<header>Тут будет хэдер</header>

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
	margin: 25px 0;
	padding: 0 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
}
</style>
