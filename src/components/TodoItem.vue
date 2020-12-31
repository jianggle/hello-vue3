<template>
	<li class="todo-item" :class="{'todo-item--closed': closed}">
		<label @click="$emit('close')"></label>
		<p>{{content}}</p>
		<button @click="$emit('remove')">x</button>
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		closed: {
			type: Boolean,
			default: false
		},
		content: String
	}
}
</script>

<style lang="scss">
.todo-item {
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 10px;

	&+& {
		margin-top: 10px;
	}

	label {
		width: 20px;
		height: 20px;
		border: 1px solid #999;
		border-radius: 4px;
	}
	p {
		flex: 1;
		word-break: break-all;
		margin: 0 10px;
	}
	button {
		width: 20px;
		height: 20px;
		background: none;
		color: #f56c6c;
		border: 1px solid #f56c6c;
		border-radius: 50%;
		font-size: 16px;
	}

	&--closed {
		color: #999;
		label {
			background-color: #999;
			border-color: #999;
			text-align: center;
			&::before {
				content: '√';
				color: #fff;
			}
		}
	}
}
</style>
