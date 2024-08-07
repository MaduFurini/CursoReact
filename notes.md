# Anotações gerais REACT

## REACT
    - Biblioteca JavaScript para criação de interfaces de usuário
    - Criada pelo Facebook em 2011
    - Atua no FrontEnd da aplicação
    - Otimizar atualização e a sincronização de atividades simultâneas

### Componentes de classes X funcionais
    - Os elementos da página são os componentes
    - Componentes de classes:
        - Importação da classe componente do REACT
        - Extender a classe componente
        - Criação de classes a partir da classe componente (extends)
        - Componentes poderão receber propriedades, parâmetros
        - É necessário um método construtor, que interpretará esses parâmetros, definirá um estado para a classe. Além disso haveria definição de binds para identificação dessas funções
    - Funcionais:
        - Função que retorna uma sintaxe HTML

### Ciclo de vida de componente
    - Construtor: Montar o componente
    - ComponentDidMount: Executar código após o componente ser montado
    - ShouldComponentUpdate: Verificar se é necessário atualizar o componente
    - Render: Renderizar o componente
    - ComponentDidUpdate: Executar código após o componente ser atualizado
    - ComponentWillUnmount: Executar código antes de o componente ser desmontado





## Outras anotações
### Framework X Biblioteca
    - Biblioteca 
        - Compartilhar soluções por meio de funções ou métodos
    - Framework
        - Ferramenta que ajuda a ter como único objetivo focar no desenvolvimento no projeto, não em detalhes de configurações

### NODE
    - Node.js é um ambiente de execução JavaScript lado servidor
        - Runtime de JavaScript
    - Executar JavaScript fora do navegador
        - Rodar através do SO, jogar pro backEnd na nuvem, rodar no terminal

### NPM
    - Gerenciador de pacotes do NODE
    - npm install <nome-do-pacote> (instalar pacote)
    - npm init (inicializar projeto)

### YARN 
    - Gerenciador de pacotes para aplicar comandos prontos ao cóidigos de uma aplicação

### REACT DevTools
    - Extensão para navegaores ou aplicativo que perimite inspecionar a hierarquia de componentes e seus estados
    - Ferramentas de debug

