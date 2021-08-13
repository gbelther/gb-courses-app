import { useContext } from "react";

import Modal from "react-modal";

import AuthContext from "../../contexts/AuthContext";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  GoogleIcon,
  GithubIcon,
} from "./styles";

interface IModalSigninProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalSignin({ isOpen, onClose }: IModalSigninProps) {
  const { signinGitHub, signinGoogle } = useContext(AuthContext);

  function handleSigninWithGoogle() {
    signinGoogle();
  }

  function handleSigninWithGithub() {
    signinGitHub();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <Container>
        <Header>
          <Title>LOGIN UTILIZANDO:</Title>
        </Header>
        <Content>
          <Button onClick={handleSigninWithGoogle}>
            <GoogleIcon />
            Google
          </Button>
          <Button onClick={handleSigninWithGithub} disabled>
            <GithubIcon />
            Github
          </Button>
        </Content>
      </Container>
    </Modal>
  );
}
