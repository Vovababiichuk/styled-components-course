import styled from "styled-components";

export const StyledTitle = styled.h1`
	color: ${props => props.color || props.theme.colors.primary};
`

export const Title = (props) => {
	return <StyledTitle {...props} />
};