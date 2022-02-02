// HEAD APP CONFIG
class Config {
    constructor() {
        // this.host = 'http://localhost:3010/'; //dev
        this.host = process.env.REACT_APP_API_HOST; //prod
    }
}
// END HEAD APP CONFIG

export const AppConfig = new Config()