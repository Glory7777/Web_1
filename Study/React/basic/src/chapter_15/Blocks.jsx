import styled from "styled-components";

const Wrapper = styled.div `
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight:bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props){
    return (
        <Wrapper>
            {blockItems.map((blockItems) => {
                return (
                    <Block
                        padding={blockItems.padding}
                        backgroundColor={blockItems.backgroundColor}
                    >
                        {blockItems.label}
                    </Block>
                );
            })}
        </Wrapper>
    )
}

export default Blocks;