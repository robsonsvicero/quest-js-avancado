const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt = "Foto do perfil do usuário"/>
                                      <div class="data">
                                        <h1>${user.name ?? 'Não possui nome cadastrado 😫'}</h1>
                                        <p>${user.bio ?? 'Não possui bio cadastrada 😫'}</p>

                                        <div class="follow">
                                          <p style="font-weight: 600;">${user.followers ?? 'Não possui followers 😫'}<span> seguidores</span></p>
                                          <p style="font-weight: 600;">${user.following ?? 'Não possui followers 😫'}<span> seguindo</span></p>
                                        <div>

                                      </div>
                                  </div>`

    let repositoriesItems = ''
    user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">
                                                                    ${repo.name}
                                                                    <div class="info-repositories">
                                                                      <span>🍴 ${repo.forks}</span>
                                                                      <span>⭐ ${repo.stargazers_count}</span>
                                                                      <span>👀 ${repo.watchers}</span>
                                                                      <span>💻 ${repo.language}</span>
                                                                    </div>
      
      </a>
      
      </li>`)

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItems}</ul>
                                     </div>`
    }

    let eventsItems = ''
    user.events.forEach((event) => {
      if (event.type === "PushEvent") {
        eventsItems += `<li>
                          <h3>${event.repo.name}</h3>
                          <p>Criado um ${event.payload.ref_type}</p>
                        </li>`
      } 
    })

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `<div class="event-info">
                                        <h2>Eventos</h2>
                                        <ul>${eventsItems}</ul>
                                     </div>`
    }

  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
  }
}

export { screen }