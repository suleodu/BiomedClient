export default {
    data: () => {
        return {};
    },
    methods: {
        dynamic_route(endUrl) {
                // return "https://biomed-backend.herokuapp.com" + endUrl;
                return "https://biomed-backend.devdrizzy.online/api" + endUrl;
        },
    },
};
