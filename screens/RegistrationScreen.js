import React from "react";
import {
  Container,
  Form,
  Item,
  Label,
  Header,
  Content,
  Input,
  Text,
  Button
} from "native-base";
import { useAuthorization } from "./+hooks/useAuthorization";

export const RegistrationScreen = () => {
  const { setPassword, setEmail, login, signUp } = useAuthorization();

  return (
    <Container>
      <Header>
        <Text>Cracker app</Text>
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email:</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setEmail}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password:</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </Item>
          <Button full rounded success onPress={login}>
            <Text>Login</Text>
          </Button>
          <Button full rounded primary onPress={signUp}>
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
