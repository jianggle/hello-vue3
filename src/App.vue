<template>
	<div class="top-nav">
		<router-link to="/">Home</router-link>
		<router-link to="/todo">Todo</router-link>
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
}
ul, ol, li {
	list-style: none;
}
a,
body,
button,
input,
input:focus,
select,
select:focus,
textarea,
textarea:focus {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	outline: 0;
	-webkit-appearance: none
}
body {
	background-color: #efefef;
}

.top-nav {
	padding: 10px 0;
	text-align: center;
	background-color: #333;
	font-size: 16px;
	a {
		color: #fff;
		&+a {
			margin-left: 10px;
		}
	}
	.router-link-active {
		color: #f00;
	}
}
</style>
