import Service from './Service';
import routes from './routes';

class Kiesel extends Service {
  // Potentially grab instrument by an identifier?
  async get(id) {
    const route = `${routes.Kiesel.get}/${id}`;
    const response = await super.get(route);
    return response.data;
  }

  async basses() {
    const route = `${routes.Kiesel.basses}`;
    const response = await super.get(route);
    return response.data;
  }

  async guitars() {
    const route = `${routes.Kiesel.guitars}`;
    const response = await super.get(route);
    return response.data;
  }
}

export default new Kiesel();