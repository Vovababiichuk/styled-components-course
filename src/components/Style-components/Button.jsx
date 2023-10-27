import styled, { css } from "styled-components";

const StyledButton = styled.button`
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	// align-self - вирівнює окремий елемент всередині flex-контейнеа
	align-self: ${props => props.align || 'stretch'};
	&:focus {
		outline: none;
	}

	${props => props.primary && css `
		color: ${props => props.color || 'white'};
		background-color: ${props => props.bgColor || 'white'};
	`}

	${props => props.outline && css `
		color: ${props => props.color || 'white'};
		background: transparent;
		border: 1px solid ${props => props.brColor || 'white'};
	`}
`

export const Button = (props) => {
	return <StyledButton {...props} />
}

export default Button