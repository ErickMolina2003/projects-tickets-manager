import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

interface UserState {
  user: object;
  userId: number;
  projectId: number;

  setUser(user: object): void;
  setUserId(id: number): void;
  setProjectId(id: number): void;
}

@Module({ namespaced: true, name: 'UserStore' })
class UserStore extends VuexModule implements UserState {
  user = {};
  userId = -1;
  projectId = -1;

  @Mutation
  setUser(user: object) {
    this.user = user;
  }

  @Mutation
  setUserId(id: number): void {
    this.userId = id;
  }

  @Mutation
  setProjectId(id: number): void {
    this.projectId = id;
  }
}

export default UserStore;
