<template>
	<div class="top-nav">
		<router-link to="/">Home</router-link>
		<router-link to="/todo">Todo</router-link>
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
body {
	/* iOS禁止调整字体大小 */
	-ms-text-size-adjust: none!important;
	-webkit-text-size-adjust: none!important;
	-moz-text-size-adjust: none!important;
	text-size-adjust: none!important;
}

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
	font-size: 14px;
	color: #333;
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
