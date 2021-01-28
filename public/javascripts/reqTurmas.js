const turmasTab = document.getElementById('turmas-tab');
const dadosTurmas = document.getElementById('dadosTurmas')
var turmas;
var requisicaoFeita = false;

const inserirDados = (tag, array) => {
  let dataTable = '';
  array.forEach(item => {
    dataTable += `
    <tr>
      <td>${item.id}</td>
      <td>${item.serie}</td>
      <td>${item.nivel}</td>
      <td>${item.turno}</td>
      <td class="">
        <a class="botao botao-detalhes" href="#">
          Detalhes
        </a>
      </td>
    </tr>
    ` 
  })
  
  tag.innerHTML = dataTable;
}

turmasTab.onclick = async () => {
  
  if(!requisicaoFeita){
    await fetch("/admin/turmas")
    .then(data => data.json())
    .then(dataDecode => {
      turmas = dataDecode;
      requisicaoFeita = true;
    })
    .catch(err => console.log(err))
  }

  inserirDados(dadosTurmas, turmas);

}
