<template>
	<header class="header">
		<nav class="nav">
			<nuxt-link to="/" class="nav-link" active-class="--active">
				<nuxt-icon name="mdi:home-outline" class="nav-link__icon" />

				<span class="nav-link__label">Главная</span>
			</nuxt-link>

			<nuxt-link to="/achievements" class="nav-link" active-class="--active">
				<nuxt-icon name="mdi:trophy-outline" class="nav-link__icon" />

				<span class="nav-link__label">Достижения</span>
			</nuxt-link>

			<nuxt-link to="/contacts" class="nav-link" active-class="--active">
				<nuxt-icon name="mdi:contacts-outline" class="nav-link__icon" />

				<span class="nav-link__label">Контакты</span>
			</nuxt-link>
		</nav>
	</header>
</template>

<style scoped lang="scss">
.header {
	position: sticky;
	top: 10px;
	left: 0;

	width: 100%;
	padding: 0 20px;
}

.nav {
	width: 35%;
	min-width: fit-content;
	margin: 0 auto;
	padding: 10px 25px;
	border-radius: 50px;

	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 0 20px;

	background: linear-gradient(-45deg, #8a8a8a2f, #acacac2f);
	backdrop-filter: blur(5px);
}

.nav-link {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5px;
	color: var(--main-light-color);
	opacity: 0.8;

	transition-property: opacity, text-shadow;
	transition-duration: 0.25s, 0.15s;

	&__icon {
		font-size: 1.75rem;
	}

	&__label {
		font-family: var(--martian-font);
		font-size: 1.2rem;
	}

	&.--active {
		text-shadow: 0 0 5px var(--add-light-color);
		opacity: 1;
	}

	&:not(.--active):hover {
		opacity: 1;
	}

	&:not(.--active):active {
		opacity: 0.65;
	}
}
</style>
