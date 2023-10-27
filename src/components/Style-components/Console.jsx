import styled from "styled-components";
import { Flex } from "./Flex";
import { useState } from "react";
import { Line } from "./Line";

const StyledConsole = styled.textarea`
	width: 100%;
	height: 70vh;
	background-color: black;
	font-size: 24px;
	border: none;
	resize: none;
	color: ${({color}) => color || 'white'};
	&:focus {
		outline: none;
	}
`

export const Console = ({color, ...props}) => {
	const [lines, setLines] = useState(['C/users/IT_BRAINS>'])

	// нужно сделвть чтобы при каждом нажатии Enter у нас создавалась новая строка в textarea
	const onKeyDown = (e) => {
		if (e.keyCode == 13) {
			setLines([
				...lines,
				'C/users/IT_BRAINS>'
			])
		}
	}

	return (
		<Flex>
			<Flex direction={'column'} margin={'0 10px'}>
				{lines.map((line, index) =>
					<Line color={color} key={index}>{line}</Line>
				)}
			</Flex>
			<StyledConsole onKeyDown={onKeyDown} color={color} {...props} />
		</Flex>
	)
}
