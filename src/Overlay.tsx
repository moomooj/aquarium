import styled from "styled-components";

function Overlay() {
  return (
    <Wrap>
      <Copyright>
        <br />
        Her Dream Car
      </Copyright>
      <NameTag>MooMooJ</NameTag>
      <WorkDate>2023/11/11 - 11/12</WorkDate>
    </Wrap>
  );
}

export default Overlay;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`;
const WorkDate = styled.div`
  position: absolute;
  bottom: 2%;
  right: 5%;
`;
const NameTag = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;
  font-size: 15px;
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 2%;
  left: 5%;
  font-size: 15px;
`;
