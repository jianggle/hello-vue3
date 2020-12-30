<template>
	<div class="toto-input">
		<input
			v-model.trim="todoContent"
			placeholder="please enter..."
			@keyup.enter="handleAdd"
		/>
		<button @click="handleAdd">Add+</button>
	</div>
	<section class="todo-section">
		<h3>To-do<span>{{todoNum}}</span></h3>
		<ul>
			<TodoItem
				v-for="(item,index) in list.todo"
				:key="index"
				:content="item"
				@remove="handleRemove('todo', index)"
				@close="handleOver(index)"
			/>
		</ul>
	</section>
	<section class="todo-section">
		<h3>Closed<span>{{closedNum}}</span></h3>
		<ul>
			<TodoItem
				v-for="(item,index) in list.over"
				:key="index"
				closed
				:content="item"
				@remove="handleRemove('over', index)"
			/>
		</ul>
	</section>
</template>

<script>
import { ref, reactive, watch, getCurrentInstance, computed } from 'vue'
import TodoItem from '@/components/TodoItem'
export default {
	name: 'Todo',
	components: {
		TodoItem
	},
	setup() {
		const { ctx } = getCurrentInstance()

		let localTodo = window.localStorage.getItem('todo')
		localTodo = localTodo && JSON.parse(localTodo)
		let list = reactive(localTodo || { todo: [], over: [] })
		let todoContent = ref('')

		watch(list, ()=>{
			window.localStorage.setItem('todo', JSON.stringify(list))
		})

		const todoNum = computed(() => {
			return list.todo.length
		})
		const closedNum = computed(() => {
			return list.over.length
		})

		function handleAdd() {
			let val = todoContent.value
			if (!val) return;
			if (list.todo.includes(val)) {
				return ctx.$toast('已有相同内容')
			}
			list.todo.unshift(val)
			todoContent.value = ''
		}

		function handleOver(index) {
			let val = list.todo.splice(index, 1)[0]
			list.over.unshift(val)
		}

		async function handleRemove(type, index) {
			try {
				await ctx.$dialog.confirm({
					message: '确定移除吗？'
				})
				list[type].splice(index, 1)
			} catch (error) {
				console.log(error)
			}
		}

		return {
			todoContent,
			list,
			todoNum,
			closedNum,
			handleAdd,
			handleOver,
			handleRemove,
		}
	}
}
</script>

<style lang="scss">
.toto-input {
	background-color: #666;
	padding: 10px;
	width: 100%;
	display: flex;
	box-sizing: border-box;
	input {
		width: 100%;
		box-sizing: border-box;
		height: 32px;
		border: 1px solid #fff;
		border-right: none;
		border-radius: 6px 0 0 6px;
		padding: 0 10px;
		&:focus {
			border-color: #4e6ef2;
		}
	}
	button {
		width: 60px;
		background-color: #4e6ef2;
		border: none;
		border-radius: 0 6px 6px 0;
		color: #fff;
	}
}

.todo-section {
	margin-top: 14px;
	h3 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 10px 10px;
		font-size: 16px;
		span {
			font-size: 14px;
			font-weight: normal;
			width: 30px;
			text-align: center;
			border-radius: 50%;
			background-color: #4e6ef2;
			color: #fff;
		}
	}
}
</style>
