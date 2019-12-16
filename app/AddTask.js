import React, { Component } from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Button, Text as NBText } from 'native-base'

export class AddTask extends Component {
	state = {
		text: '',
		category: ''
	}

	onTaskChange = event => {
		this.setState({ task: event.nativeEvent.text })
	}

	onCategoryChange = event => {
		this.setState({ category: event.nativeEvent.text })
	}

	//Saves the item from the function passed through by main, then goes back
	onAddTask = () => {
		this.props.navigation.state.params.saveItem(this.state.task, this.state.category)
		this.props.navigation.goBack()
	}

	render() {
		return (
			<View>
				<View style={{ marginRight: 10 }}>
					<Form>
						<Item>
							<Input
								placeholder='Enter a new task...'
								value={this.state.task}
								autoFocus
								clearButtonMode='always'
								autoCorrect={false}
								onChange={this.onTaskChange}
							/>
						</Item>
						<Item>
							<Input
								placeholder='Enter a category (default none)'
								value={this.state.category}
								autoFocus
								clearButtonMode='always'
								autoCorrect={false}
								onChange={this.onCategoryChange}
							/>
						</Item>
					</Form>
				</View>
				<View style={{ marginTop: 20 }}>
					<Button
						style={{ backgroundColor: '#5067FF', margin: 25, justifyContent: 'center' }}
						onPress={this.onAddTask}
					>
						<NBText style={{ fontWeight: 'bold' }}>Add Task</NBText>
					</Button>
				</View>
			</View>
		)
	}
}

export default AddTask