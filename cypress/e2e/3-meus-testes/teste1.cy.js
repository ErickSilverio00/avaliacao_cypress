describe("Meus testes no Cypress", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Verifica a presença dos campos do formulário", () => {
    cy.get(".action_nome").should("be.visible");
    cy.get(".action_email").should("be.visible");
    cy.get(".action_senha").should("be.visible");
    cy.get(".action_confirmar-senha").should("be.visible");
    cy.get(".action_submit-button").should("be.visible");
  });

  it('Verifica mensagem de erro quando o campo "Nome" está vazio', () => {
    cy.get(".action_submit-button").click();
    cy.get(".action_nome").should("contain.text", "Campo obrigatório!");
  });

  it('Verifica mensagem de erro quando o campo "E-mail" está vazio', () => {
    cy.get(".action_nome").type("Nome Teste");
    cy.get(".action_submit-button").click();
    cy.get(".action_email").should("contain.text", "Campo obrigatório!");
  });

  it("Verifica mensagem de erro para e-mail inválido", () => {
    cy.get(".action_nome").type("Nome Teste");
    cy.get(".action_email").type("emailinvalido");
    cy.get(".action_submit-button").click();
    cy.get(".action_email").should(
      "contain.text",
      "Formato de e-mail inválido!"
    );
  });

  it('Verifica mensagem de erro quando o campo "Senha" está vazio', () => {
    cy.get(".action_nome").type("Nome Teste");
    cy.get(".action_submit-button").click();
    cy.get(".action_senha").should("contain.text", "Campo obrigatório!");
  });

  it('Verifica mensagem de erro quando o campo "Confirmação de Senha" está vazio', () => {
    cy.get(".action_nome").type("Nome Teste");
    cy.get(".action_submit-button").click();
    cy.get(".action_confirmar-senha").should(
      "contain.text",
      "Campo obrigatório!"
    );
  });

  it("Verifica mensagem de erro quando as senhas não coincidem", () => {
    cy.get(".action_nome").type("Nome Teste");
    cy.get(".action_senha").type("senha123");
    cy.get(".action_confirmar-senha").type("diferente");
    cy.get(".action_submit-button").click();
    cy.get(".action_confirmar-senha").should(
      "contain.text",
      "As senhas devem ser iguais!"
    );
  });

  it("Submissão bem-sucedida com todos os campos preenchidos corretamente", () => {
    const nome = "Nome Teste";
    const email = "teste@teste.com";
    cy.get(".action_nome").type(nome);
    cy.get(".action_email").type(email);
    cy.get(".action_senha").type("senha123");
    cy.get(".action_confirmar-senha").type("senha123");
    cy.get(".action_submit-button").click();
    cy.contains("Cadastro concluído com sucesso!").should("be.visible");
  });

  it("Submissão com campos vazios", () => {
    cy.get(".action_submit-button").click();
    cy.get(".action_nome").should("contain.text", "Campo obrigatório!");
    cy.get(".action_email").should("contain.text", "Campo obrigatório!");
    cy.get(".action_senha").should("contain.text", "Campo obrigatório!");
    cy.get(".action_confirmar-senha").should(
      "contain.text",
      "Campo obrigatório!"
    );
  });
});
