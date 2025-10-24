<script setup lang="ts">
const goUp = (): void => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}
</script>

<template>
	<footer class="footer">
		<div class="wrapper">
			<p class="copyright">2025 Святослав "Qaddis" Барсуков &copy;</p>

			<button class="go-up-btn" @click="goUp">Наверх</button>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	width: 100%;
	background-color: var(--bg-color-3);
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
}

.wrapper {
	max-width: 1140px;
	padding: 50px 0 25px;
	margin: 0 auto;
}

.copyright {
	font-size: 1.25rem;
	text-align: center;
}

.go-up-btn {
	display: block;
	margin: 20px auto 0;
	text-decoration: underline;
	opacity: 0.5;
}
</style>
