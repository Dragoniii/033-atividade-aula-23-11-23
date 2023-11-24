const api = axios.create({
  baseURL: "https://reqres.in/api",
});

async function carregarDados() {
  const response = await api.get('/users')

  const users = response.data.data

  const section = document.getElementById('cards')

  users.forEach(user => {

    const renderCard = `
      <div id="card" class="caixa">
        <p>name: ${user.first_name} ${user.last_name}</p>
        <br>
        <p>email: ${user.email} </p>
      </div>
    `;

    console.log(renderCard);

    section.innerHTML += renderCard

  });
};

carregarDados();
