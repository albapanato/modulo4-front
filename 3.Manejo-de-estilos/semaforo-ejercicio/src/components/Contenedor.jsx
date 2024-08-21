import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: red;

  border: 1px solid black;
`;

const Contenedor = () => {
  return (
    <div>
      <StyledDiv>Dentro del DIV</StyledDiv>
    </div>
  );
};

export default Contenedor;
