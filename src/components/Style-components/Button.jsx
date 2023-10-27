import styled from "styled-components";

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
`

export const Button = (props) => {
	return <StyledButton {...props} />
}

export default Button