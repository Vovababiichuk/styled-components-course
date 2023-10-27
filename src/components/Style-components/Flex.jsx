import styled from "styled-components";

const StyledFlex = styled.div`
	display: flex;
	// якщо props.direction ми передали то буде він а інакще буде писвоїно значення по замовчуванню
	flex-direction: ${props => props.direction || 'row'};
	align-items: ${props => props.align || 'stretch'};
	justify-content: 	${props => props.justify || 'stretch'};
	// тут можна зробити деструктиризацію і з пропса отримати тільки дане значення
	margin: ${({ margin }) => margin || '0'};
`

export const Flex = (props) => {
	return <StyledFlex {...props} />
}
