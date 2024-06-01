import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ContainerEscritas,
  ContainerForm,
  ContainerPageLeft,
  ContainerPageRight,
  PageContainer,
  TextoSubtitulo,
  TextoTitulo,
} from "./styles";

export default function App() {
  const [nome, setNome] = useState("");
  const [nomeErro, setNomeErro] = useState("");
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [confirmarSenhaErro, setConfirmarSenhaErro] = useState("");

  const aoSubmeterFormulario = (event) => {
    event.preventDefault();

    if (validarCampos()) {
      toast.success("Cadastro concluído com sucesso!");
      limparCampos();
    }
  };

  const validarCampos = () => {
    let valido = true;

    if (!nome) {
      setNomeErro("Campo obrigatório!");
      valido = false;
    } else {
      setNomeErro("");
    }

    if (!email) {
      setEmailErro("Campo obrigatório!");
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErro("Formato de e-mail inválido!");
      valido = false;
    } else {
      setEmailErro("");
    }

    if (!senha) {
      setSenhaErro("Campo obrigatório!");
      valido = false;
    } else {
      setSenhaErro("");
    }

    if (!confirmarSenha) {
      setConfirmarSenhaErro("Campo obrigatório!");
      valido = false;
    } else if (confirmarSenha !== senha) {
      setConfirmarSenhaErro("As senhas devem ser iguais!");
      valido = false;
    } else {
      setConfirmarSenhaErro("");
    }

    return valido;
  };

  const limparCampos = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setNomeErro("");
    setEmailErro("");
    setSenhaErro("");
    setConfirmarSenhaErro("");
  };

  return (
    <>
      <ToastContainer autoClose={3000} theme="colored" />
      <PageContainer>
        <ContainerPageLeft>
          <ContainerEscritas>
            <TextoTitulo>
              Não perca as ofertas exclusivas de viagens!
            </TextoTitulo>
            <TextoSubtitulo>Cadastre-se agora e aproveite!</TextoSubtitulo>
          </ContainerEscritas>
          <ContainerForm onSubmit={aoSubmeterFormulario}>
            <TextField
              className="action_nome"
              label="Nome"
              variant="outlined"
              size="small"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              error={Boolean(nomeErro)}
              helperText={nomeErro}
            />
            <TextField
              className="action_email"
              label="E-mail"
              variant="outlined"
              size="small"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailErro)}
              helperText={emailErro}
            />
            <TextField
              className="action_senha"
              label="Senha"
              variant="outlined"
              size="small"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              error={Boolean(senhaErro)}
              helperText={senhaErro}
            />
            <TextField
              className="action_confirmar-senha"
              label="Confirmar Senha"
              variant="outlined"
              size="small"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              error={Boolean(confirmarSenhaErro)}
              helperText={confirmarSenhaErro}
            />
            <Button
              className="action_submit-button"
              variant="contained"
              style={{ backgroundColor: "#0e697c" }}
              type="submit"
            >
              Confirmar
            </Button>
          </ContainerForm>
        </ContainerPageLeft>
        <ContainerPageRight></ContainerPageRight>
      </PageContainer>
    </>
  );
}
