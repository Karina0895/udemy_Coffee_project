import HomePage from "./components/pages/home-page";
import OurCoffeePage from "./components/pages/our-coffee-page";
import ForPleasurePage from "./components/pages/pleasure-page"
import CoffeeLogo from "./images/coffee-logo.svg"
import HomeBanner from "./images/home-banner-bg.jpg"
import PagesBanner from "./images/pages-bg.png"

const routes = [
    {
        path: "/",
        element: <HomePage />,
        navLabel: "Coffee house",
        title: "Everything You Love About Coffee",
        subtitle: "We makes every day full of energy and taste. Want to try our beans?",
        bannerImage: HomeBanner,
        icon: CoffeeLogo
    },
    {
        path: "/our-coffee",
        element: <OurCoffeePage />,
        navLabel: "Our coffee",
        title: "Our Coffee",
        bannerImage: PagesBanner
    },
    {
        path: "/pleasure",
        element: <ForPleasurePage />,
        navLabel: "For your pleasure",
        title: "For your pleasure",
        bannerImage: PagesBanner
    },
];

export default routes;