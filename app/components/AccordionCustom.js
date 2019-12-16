import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList, View } from 'react-native'
import {Accordion, Container, Content, Header, Text as NBText} from 'native-base'
import Item from './Item'


export default class AccordionCustom extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        inCompleteTodo: PropTypes.func.isRequired
    }

    _renderContent(item) {
        
        return (
            <FlatList
                data={this.props.data}
                ListEmptyComponent={this._listEmptyComponent}
                contentContainerStyle={styles.content}
                renderItem={row => {
                    return (
                        <Item
                            isCompleted={row.item.isCompleted}
                            textValue={row.item.textValue}
                            id={row.item.id}
                            deleteTodo={this.props.deleteTodo}
                            completeTodo={this.props.completeTodo}
                            inCompleteTodo={this.props.inCompleteTodo}
                        />
                    )
                }}
                keyExtractor={item => item.id}
            />
        )
    }

    _listEmptyComponent = () => {
		return (
			<View>
				<NBText style={styles.textStyle}>Nothing to show!</NBText>
			</View>
		)
	}

    render() {
        dataArr = []
        dataArr.push({title: 'Today', content: this.props.data })

        return (
            // <Container>
            //     <Content padder>
            //         <Accordion
            //             dataArray={dataArr}
            //             renderContent={this._renderContent}
            //             expanded={true}
            //         />
            //     </Content>
            // </Container>
            this._renderContent()
        )
    }
}

const styles = StyleSheet.create({
    content: {
		flex: 1,
		alignSelf: 'stretch'
    },
    textStyle: {
		color: '#4F50DC',
        fontSize: 18,
        marginVertical: 20,
        paddingLeft:  10
	}
});