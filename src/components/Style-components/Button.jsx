import styled, { css, keyframes } from "styled-components";

const RotateAnimation = keyframes`
	0% {
		transform: rotateZ(0deg);
	}
	100% {
		transform: rotateZ(360deg);
	}
`

const StyledButton = styled.button.attrs(({
	outline: 'true',
}))`
	border: none;
	padding: 10px 15px;
	font-size: 18px;
	cursor: pointer;
	// align-self - вирівнює окремий елемент всередині flex-контейнеа
	align-self: ${props => props.align || 'stretch'};

	${props => props.primary && css `
		color: ${props => props.color || 'white'};
		background-color: ${props => props.background || 'white'};
	`}

	${props => props.outline && css `
		color: ${props => props.color || 'white'};
		background: transparent;
		border: 1px solid ${props => props.color || props.theme.colors.primary};
	`}

&:focus {
		outline: none;
	}

	&:hover {
		animation: ${RotateAnimation} 1s infinite linear;
	}
`

//! Пиклад як можна розширювати існуючі стилізовані компоненти
const LargeButton = styled(StyledButton)`
	font-size: 32px;
	color: ${props => props.color || props.theme.colors.primary};
`


export const Button = (props) => {
	return <LargeButton {...props} />
}
