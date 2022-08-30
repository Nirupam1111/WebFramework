import {UserEdit} from './views/UserEdit';
import {User} from './models/User';

const user = User.buildUser({name: 'Nirupam Sur', age: 20});
const useEdit = new UserEdit(
    document.getElementById('root')!,
    user
);

useEdit.render();
