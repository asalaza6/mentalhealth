const DEVELOPMENT = true;
export const DEVELOPMENT2 = true;
//NA FOR PRIVACY CONCERNS
const IP = 'NA';
const configs = {
    api: {
        url: DEVELOPMENT ? 'localhost' : IP,
        port: 5000
    },
}
export default configs
