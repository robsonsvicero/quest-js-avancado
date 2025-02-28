 //criando objeto 'user'

const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName:'',
  followers: '',
  following: '',
  events: [],
  repositories: [],
  
  //criando métodos

  setInfo(gitHubUser){
    this.avatarUrl = gitHubUser.avatar_url 
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following
    this.events = gitHubUser.events

  },

  setRepositories(repositories) {
    this.repositories = repositories
  },

  setEvents(events) {
    this.events = events
  }



}

export { user }