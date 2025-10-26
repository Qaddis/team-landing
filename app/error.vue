<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
	error: Object as () => NuxtError
})

const router = useRouter()

const goBack = (): void => {
	router.push("/")
}
</script>

<template>
	<div class="page">
		<h1 class="status-code">
			Ошибка <span>{{ props.error?.statusCode }}</span>
		</h1>

		<button class="go-back-btn" @click="goBack">Назад</button>
	</div>
</template>

<style scoped lang="scss">
.page {
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px 0;
}

.status-code {
	font-size: 3.5rem;
	font-family: var(--header-font);

	span {
		animation: blinking 1.75s ease-in-out infinite;
	}
}

.go-back-btn {
	display: inline-block;
	background-color: var(--accent-color);
	padding: 7.5px 15px;
	border-radius: 5px;

	font-size: 1.5rem;
	font-family: var(--header-font);

	transition-property: opacity, translate;
	transition-duration: 0.15s, 0.25s;

	&:active {
		opacity: 0.75;
		translate: 0 3.5px;
	}
}

@keyframes blinking {
	0% {
		color: var(--main-light-color);
	}

	50% {
		color: var(--accent-color);
	}

	100% {
		color: var(--main-light-color);
	}
}
</style>
