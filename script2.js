const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

function montarCard(data){
  const section = document.getElementById('cards');

  data.forEach(user => {
    const renderCard = `
      <div class="caixa">
        <p>name: ${user.first_name} ${user.last_name}</p>
        <p>email: ${user.email}</p>
      </div>
    `;

    section.innerHTML += renderCard;
  });
}

async function carregarDados(){
  try {
    const response = await api.get('/users');
    const users = response.data.data;
    montarCard(users);
  } catch (error) {
    console.error("Erro ao carregar dados: ", error);
  }
}

carregarDados();
