# Vini UI

Design system pessoal para aplicações web de Vinicius.

**Estado: fundação.** A estrutura e as regras estão definidas; valores visuais, ícones e componentes ainda aguardam escolhas reais. Os arquivos CSS são pontos de entrada vazios, não uma biblioteca pronta para produção.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) | Regras, terminologia e decisões do sistema |
| [AGENTS.md](AGENTS.md) | Instruções para agentes de IA que trabalham neste repositório |
| [tokens/](tokens/) | Valores reutilizáveis e seus significados |
| [components/](components/) | Estilos e contratos de componentes |
| [icons/](icons/) | Assets SVG aprovados |
| [showcase/](showcase/) | Futuro catálogo visual dos componentes reais |

## Como orientar uma IA

> Use o Vini UI em https://github.com/viniciusnevesdev/Vini-ui como referência visual. Leia DESIGN-SYSTEM.md e os arquivos relevantes na revisão escolhida. Reutilize definições aprovadas; não trate arquivos vazios ou exemplos de nomes como decisões visuais. Se faltar uma definição, sinalize a lacuna antes de atribuir uma preferência ao usuário. Mantenha exceções específicas no projeto consumidor.

Um link sozinho não garante que uma IA consiga consultar os arquivos. Se necessário, forneça os arquivos relevantes ou um snapshot do repositório.

## Próximas decisões

1. Definir cores, espaçamento, tipografia, raios e dimensões a partir de escolhas aprovadas.
2. Adicionar os SVGs aprovados para ações recorrentes.
3. Implementar Button, Icon button, Card e Bottom navigation.
4. Demonstrar os componentes no showcase usando os mesmos arquivos.

Não é necessário completar toda a biblioteca para começar a reutilizar uma parte aprovada.

## Reutilização e atualizações

Registre no projeto consumidor o commit do Vini UI utilizado. Nesta fase, copie apenas os arquivos necessários e mantenha a referência à origem.

Alterar o Vini UI **não atualiza automaticamente** aplicações que copiaram seus arquivos. Atualizar essas aplicações exige incorporar a nova revisão e verificar o resultado. Uma distribuição versionada poderá ser adotada quando houver componentes estáveis.

Ainda não existe PWA, publicação, pacote ou versão estável.
