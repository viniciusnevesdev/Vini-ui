# Vini UI — Design system

## Objetivo e autoridade

Vini UI é a fonte de referência para decisões visuais reutilizáveis nas aplicações web de Vinicius. A documentação explica o uso; tokens, componentes e assets implementam decisões aprovadas. O showcase demonstra essas implementações, sem criar uma segunda versão delas.

Esta revisão contém a fundação e sete tamanhos tipográficos aprovados pelo usuário. Valores concretos de cores, espaçamentos, raios, sombras e ícones permanecem em definição.

## Base visual aprovada

**Aprovada em 6 de outubro de 2026.** O Vini UI parte de fundo claro levemente acinzentado, superfícies elevadas claras, bordas discretas, sombras suaves, cantos arredondados e profundidade visual sutil. Cores fortes comunicam principalmente função, estado ou identidade do aplicativo.

Esta decisão descreve a direção do sistema. Seus valores concretos — tokens de cor, borda, sombra e border radius — serão definidos e aprovados em seguida.

## Terminologia

Use termos técnicos estabelecidos e explique-os em português quando necessário. Apelidos informais ajudam na conversa, mas não substituem nomes canônicos nos arquivos e na documentação.

| Termo | Significado |
| --- | --- |
| Design token | Valor nomeado reutilizável, como cor, espaçamento ou dimensão |
| Primitive token | Valor de uma escala ou paleta, independente de um uso específico |
| Semantic token | Nome que expressa uma função e referencia um valor, como cor de texto ou superfície |
| Component token | Valor ou referência que configura uma decisão específica de um componente, quando necessário |
| Component | Elemento reutilizável com estrutura, aparência e comportamento definidos |
| Variant | Variação prevista de um componente, como Button primary ou secondary |
| State | Condição de interação, como focus, disabled, pressed ou loading |
| Pattern | Combinação recorrente de componentes para resolver uma tarefa |
| Asset | Recurso como um arquivo SVG |
| Showcase | Catálogo visual que demonstra o sistema implementado |

Component tokens são válidos. Não é errado definir tokens específicos para Button e Card; introduza-os quando expressarem uma decisão real, evitando duplicação sem propósito.

### Componentes e ações

- **Button** executa uma ação; um link navega para um destino.
- **Icon button** é um botão cujo conteúdo visual principal é um ícone; precisa de nome acessível.
- **Card** agrupa conteúdo relacionado. Ser clicável ou expansível exige comportamento explicitamente definido.
- **Bottom navigation** oferece navegação entre destinos principais na parte inferior da interface.
- **Tab bar / Tabs** permite selecionar painéis ou seções relacionados, conforme o contexto.
- **Toolbar** agrupa ações. Estar na parte inferior não a transforma em navegação.
- **Dialog** apresenta uma interação em uma janela; **modal** descreve a modalidade que bloqueia interação com o restante.
- **Text field** recebe texto; **Input** é um termo mais amplo e também o nome de um elemento HTML.
- **Check** identifica o desenho do ícone; **Confirm** descreve uma ação. Um desenho não determina sozinho o significado do botão.

Escolha os nomes pela função e pelo comportamento, não apenas pela posição ou aparência.

## Organização e nomes

- Identificadores técnicos podem usar português; o usuário prefere nomes claros nessa língua.
- Não há exigência aprovada de inglês ou de prefixos `vui-` / `--vui-`; a antiga imposição foi rejeitada.
- Preservar nomes existentes em arquivos funcionais quando a renomeação afetar compatibilidade.
- Exemplo aprovado: `--fonte-corpo: 14px`. Não criar novos tamanhos ou cores quase idênticos sem motivo real.
- Valores compartilhados pertencem aos arquivos de tokens; componentes os reutilizam.

## Aprovação de decisões

Uma nova definição deve registrar aqui sua função, valor ou asset, origem da escolha e estado de aprovação. Sugestões e experimentos precisam estar identificados como tal e não devem ser apresentados como preferências do usuário.

| Categoria | Estado |
| --- | --- |
| Cores | Base visual aprovada; valores a definir |
| Espaçamento | A definir |
| Tipografia | Sete tamanhos aprovados, implementados em `tokens/typography.css`; pesos e famílias ainda a definir |
| Border radius | Direção aprovada; escala a definir |
| Dimensões | A definir |
| Sombras | Direção aprovada; valores a definir |
| Ícones | A definir |
| Componentes e variantes | A definir |

Adicione somente definições úteis ao uso real. Uma necessidade específica de um app permanece no app até justificar reutilização no sistema.

## Tipografia — aprovada em 17/11/2026

Escala compacta: sete tamanhos CSS com funções distintas. A escolha deriva da preferência do usuário pela hierarquia visual no estilo Apple e da comparação de amostras.

| Token | Valor | Finalidade |
| --- | ---: | --- |
| `--fonte-navegacao` | 11px | Navegação inferior |
| `--fonte-legenda` | 12px | Legendas e metadados |
| `--fonte-corpo` | 14px | Texto principal, botões e controles |
| `--fonte-campo` | 16px | Textos digitáveis (input, textarea, select); reduz zoom de foco no Safari iPhone |
| `--fonte-secao` | 18px | Títulos de seção |
| `--fonte-titulo` | 24px | Títulos de página e números de prévias pequenas |
| `--fonte-destaque` | 30px | Números de estatísticas em destaque |

Evitar tamanhos quase iguais por componente. Preservar adaptações de acessibilidade e exceções justificadas. Em comparações visuais, colocar nome e tamanho fora da amostra, mantendo os rótulos em formatação constante.

## Contrato dos componentes

Ao implementar um componente, documente estrutura HTML, variantes, estados, comportamento, acessibilidade, tokens utilizados e exemplos de uso. Não trate CSS isolado como implementação completa de um componente interativo.

Use semântica HTML adequada, nomes acessíveis, foco visível e operação por teclado. Defina áreas de toque, contraste e adaptação à tela ao escolher os valores. Em navegação inferior, considere safe area e espaço para não cobrir o conteúdo. Não transforme critérios de acessibilidade em medidas supostamente escolhidas pelo usuário.

## Ícones

Adicione somente assets aprovados, com nome por significado e origem registrada em `icons/README.md`. Use SVG com `viewBox` e, para ícones monocromáticos, `currentColor` em fill ou stroke conforme o desenho. Preserve exceções multicoloridas documentadas.

Não invente um ícone equivalente quando houver um aprovado. Não presuma que todo SVG baixado tem permissão de redistribuição.

## Showcase

O catálogo deve importar os tokens e componentes reais. Demonstre variantes e estados, com nomes canônicos. Estilos de organização do catálogo pertencem ao showcase e não são automaticamente tokens do sistema.

A instalação como PWA será uma decisão posterior. Não adicione service worker ou dependências antes de existir uma necessidade concreta.

## Consumo e evolução

Projetos consumidores devem registrar a revisão utilizada. Exceções locais precisam de justificativa e ficam fora dos arquivos do sistema.

Uma alteração no sistema não se propaga automaticamente para arquivos copiados. Antes de incorporar uma atualização, confira mudanças de aparência e comportamento. Defina versões e processo de distribuição quando a primeira parte utilizável estiver aprovada.
