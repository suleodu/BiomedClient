export default {
    data: () => {
        return {};
    },
    methods: {
        dynamic_route(endUrl) {
                return "https://biomed-backend.herokuapp.com/api/" + endUrl;
        },
    },
};
