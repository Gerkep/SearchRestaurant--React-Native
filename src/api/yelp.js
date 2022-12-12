import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer uSwRz8KGD96P0_o2GVhqNw7bQal0je7JkPJGuBS3RWhWrde1dZXzV3zgxP6o0YFClPRQV66UuM2xq9Ex3PkuUdUG6nvgAKQwJ-3KuKH20DTvCIlUCOT--FrQ6XaXY3Yx'
    }
})