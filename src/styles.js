import styled from "styled-components";
import Background from "./assets/background.jpg";

export const PageContainer = styled.div`
  display: flex;
  height: 100dvh;
`;

export const ContainerPageLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const ContainerEscritas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin-bottom: 40px;
`;

export const TextoTitulo = styled.h1`
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin: 0;
`;

export const TextoSubtitulo = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: 400;
  margin: 0;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
`;

export const ContainerPageRight = styled.div`
  display: flex;
  width: 40%;
  background-image: url(${Background});
  background-size: cover;
  background-position: bottom;
`;
