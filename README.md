# Metropole Garage

![Imagem de demonstração](https://i.imgur.com/MdtFgxn.png)

Este recurso para **FiveM** implementa um sistema de garagem personalizado para servidores Roleplay. A estrutura do projeto é organizada em três partes principais: `server`, `client` e `ui`, cada uma responsável por uma camada da aplicação.

[**Vídeo de demonstração**](https://www.youtube.com/watch?v=naJpaaTQmvk)

---

## 📁 Estrutura do Projeto

### `client/`

Contém os scripts que rodam no lado do jogador (cliente). Ele é responsável por:

- Detectar quando o jogador interage com a garagem.
- Enviar eventos e comandos para o servidor, como guardar ou retirar um veículo.

### `server/`

Contém a lógica do lado do servidor. Suas responsabilidades incluem:

- Gerenciar os dados dos veículos armazenados por cada jogador.
- Validar e processar requisições vindas do cliente.
- Integrar com banco de dados.

### `ui/`

A interface gráfica que aparece para o jogador quando ele interage com a garagem. Essa parte é desenvolvida com React, TypeScript e Tailwind. Ela é responsável por:

- Exibir os veículos disponíveis para o jogador.
- Fornecer ações como guardar ou retirar um veículo.
- Se comunicar com o client.

---

## 📦 Requisitos

- Servidor **FiveM** com suporte a `fxmanifest.lua`.
- Node.JS **v22.15.0**
- MySQL
- oxmysql
---

## 🚀 Instalação

1. Clone este repositório dentro da pasta `resources/` do seu servidor:

   ```bash
   git clone https://github.com/SterRoque/metropole-garage.git
   ```

2. Crie um arquivo .env com a variável DATABASE_URL, dentro da pasta server:
   ```bash
   echo "DATABASE_URL=url_do_seu_mysql" > ./server/.env
   ```
   
3. Rode o comando abaixo para instalar as dependências e compilar os arquivos:

   ```bash
   # Navega para o diretório `ui`, instala dependências e faz o build
   cd ./ui && npm install && npm run build
   
   # Volta para o diretório raiz e faz o mesmo para o `client`
   cd ../client && npm install && npm run build

   # Por fim, entra no diretório `server`, instala dependências e faz o build
   cd ../server && npm install && npm run build && \
   
   # Volta para o diretório raiz
   cd ..
   ```

3. Configure seu banco de dados. Certifique-se de ter um banco de dados MySQL e conecte-o corretamente:

   1. **Instale o `oxmysql`**: 
      O `metropole-garage` depende do `oxmysql` para realizar a conexão com o banco de dados MySQL. Certifique-se de ter o `oxmysql` instalado no seu servidor. Caso ainda não tenha, faça o download e coloque na pasta `resources` do seu servidor.

      Para instalar o `oxmysql`, siga os passos abaixo:

      - Baixe o `oxmysql` no [repositório oficial](https://github.com/overextended/oxmysql).
      - Coloque a pasta do `oxmysql` na pasta `resources/` do seu servidor.
      - Adicione a seguinte linha no seu `server.cfg` para garantir que o `oxmysql` seja iniciado:

        ```cfg
        ensure oxmysql
        ```

   2. **Configure a conexão no `server.cfg`**:

      Após instalar o `oxmysql`, é necessário configurar a conexão com o banco de dados no arquivo `server.cfg`. Adicione as seguintes linhas ao seu arquivo `server.cfg`, substituindo os valores pelas configurações do seu banco de dados:

      ```cfg
      # Configuração do banco de dados MySQL
      set mysql_connection_string "mysql://usuario:senha@ip_do_servidor:porta/nome_do_banco"
      ```

   3. **Verifique a Conexão**:

      Após configurar, reinicie o servidor. Caso tenha feito tudo corretamente, o servidor deverá se conectar ao banco de dados. Para mais detalhes, acesse o [repositório oficial](https://github.com/overextended/oxmysql).

   > **Dependência**: O funcionamento deste sistema de garagem depende do `oxmysql` para armazenar dados como os veículos dos jogadores, então, sem essa configuração, o sistema não funcionará corretamente.
  
   4. **Migrations e seeds**:

      Suba as migrations necessária para o funcionamento do seu banco de dados, dentro da pasta "server"
      ```bash
      npm run migrate
      ```

      Caso queira popular sua base de dados, rode o seguinte comando (pode editar):
      ```bash
      npm run seed
      ```

   No arquivo `server/db/seeds/001_players_and_vehicles.ts`, você precisa editar o nome do jogador e o `steam_id` nas linhas 13 e 14. Por padrão, o código está configurado para inserir um jogador. 
     ```ts
     await knex("players").insert({
       id: playerId,
       name: "your_name",  // Editar o nome do jogador aqui
       steam_id: "steam:your_steam_id",  // Substitua pelo seu steam_id
       created_at: new Date(),
     });
     ```
5. No seu `server.cfg`, adicione:

   ```cfg
   ensure metropole-garage
   ```

6. Inicie o servidor e verifique se o recurso está funcionando corretamente.

---

## 🛠️ Comandos de Admin e Player

O sistema de garagem inclui alguns comandos que podem ser utilizados tanto pelos administradores quanto pelos jogadores, para facilitar a interação com o sistema de veículos.

### Comandos para Administradores:
5. Antes de tudo, configure seu server.cfg da seguinte maneira:
```cfg
   add_ace group.admin metropole.admin allow
   add_principal identifier.sua_steam_id group.admin
```



- **/car placa_ou_modelo_do_carr**  
  Este comando permite que os administradores spawnem um veículo. O comando pode ser utilizado utilizando a **placa** ou o **modelo** do carro. Exemplo de uso:
  ```bash
  /car ABC1234
  ```
  ou
    ```bash
  /car akuma
  ```
  
### Comandos para garagem:

- **/garage**  
  Este comando permite que os jogadores abram a sua garagem
  ```bash
  /garage
  ```
  
### 

## 🛠️ Customização

Você pode adaptar:

- O layout da interface (`ui/`) para combinar com o estilo visual do seu servidor.
- A lógica do servidor (`server/`) para integrar com o seu sistema de veículos.
- Os scripts do cliente (`client/`) para adicionar animações, sons ou interações extras.

---

Feito com 💚 por [SterRoque](https://github.com/SterRoque)

---